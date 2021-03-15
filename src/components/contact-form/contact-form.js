import React from 'react';
import './contact-form.scss';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import RequestService from '../../services/requests';
import baseURL from '../../assets/baseURL';

const reqService = new RequestService();

const ContactForm = ({itemId='', formId}) => {
  
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            comments: ''
        },
        onSubmit: (values, { resetForm }, e) => {

            if (itemId) {
                values.itemId = itemId;
            }

            const messageBlock = document.createElement('div');
            document.getElementById(formId).parentNode.appendChild(messageBlock);
            messageBlock.style.fontSize = '.8rem';
            messageBlock.style.fontWeight = 'bold';

            reqService.postItems(baseURL + 'requests', values) 
            .then(res => {
                console.log(res);
                messageBlock.innerHTML = 'Thank you! We will contact you soon';
                //messageBlock.classList.add = 'msg-success';
                messageBlock.style.color = "green";
            })
            .catch( () => {
                console.error('Could not POST data!');
                messageBlock.innerHTML = 'You request was not sent. Please contact us by phone.';
                //messageBlock.classList.add = 'msg-error';
                messageBlock.style.color = "red";
            })
            .finally(() => {
                resetForm();  
                setTimeout( (() => messageBlock.remove()), 4000);   
            })
        },
      });

    return(
        <section>
            <div className="form-title">{formId === 'usual-feedback' ? 'Contact us' : 'Request more info'}</div>
            <form id={formId} onSubmit={(e) => formik.handleSubmit(e)}>
                <div className="form-group">
                    {itemId ? <input type="hidden" className="form-control" name="id" value={itemId} /> : null}    
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Name" required
                        onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="lastname" placeholder="Last name" 
                        onChange={formik.handleChange} value={formik.values.lastname} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="phone" placeholder="Phone"
                        onChange={formik.handleChange} value={formik.values.phone} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Email"  required
                        onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="comments" placeholder="Comments "
                        onChange={formik.handleChange} value={formik.values.comments} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label ml-1" htmlFor="privpolicy">I have read and accept the <Link to="/">privacy policy</Link></label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form><br/>

        </section>
    )
}

export default ContactForm;