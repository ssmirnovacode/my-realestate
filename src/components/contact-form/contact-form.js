import React from 'react';
import './contact-form.scss';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import RequestService from '../../services/requests';
import baseURL from '../../assets/baseURL';
import basePath from '../../assets/basePath';

const reqService = new RequestService();

const validate = (values) => {
    const errors = {};
  
    if (values.name.length > 0 && !/[a-zA-Z]/g.test(values.name)) {
        errors.name = 'Name can only contain letters';
      }
    
      if (values.lastname.length > 0 && !/[a-zA-Z]/g.test(values.lastname)) {
        errors.lastname = 'Name can only contain letters';
      }

    if (values.email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
    }

    /* if (!values.phone) {
    errors.phone = 'Required';
    } else */ if (values.phone.length > 0 && !/([+]\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/i.test(values.phone)) {
    errors.phone = 'Invalid phone number';
    }
  
    return errors;
  };

const ContactForm = ({itemId='', formId}) => {
  
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            comments: ''
        },
        validate,
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
                        {formik.errors.name ? <div className="errMess">{formik.errors.name}</div> : null}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="lastname" placeholder="Last name" 
                        onChange={formik.handleChange} value={formik.values.lastname} />
                        {formik.errors.lastname ? <div className="errMess">{formik.errors.lastname}</div> : null}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="phone" placeholder="+34XXXXXXXXX"
                        onChange={formik.handleChange} value={formik.values.phone} />
                        {formik.errors.phone ? <div className="errMess">{formik.errors.phone}</div> : null}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Email" required
                        onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email ? <div className="errMess">{formik.errors.email}</div> : null}
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="comments" placeholder="Comments "
                        onChange={formik.handleChange} value={formik.values.comments} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label ml-1" htmlFor="privpolicy">I have read and accept the <Link to={`${basePath}/privacy`}>privacy policy</Link></label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form><br/>

        </section>
    )
}

export default ContactForm;