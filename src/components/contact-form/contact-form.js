import React from 'react';
import './contact-form.scss';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import basePath from '../../assets/basePath';
import validate from '../../services/validation';
import firebase from '../../firebase.config';

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

            const requestRef = firebase.database().ref('requests');
                requestRef.push(values);
                console.log(values);
                messageBlock.innerHTML = 'Thank you! We will contact you soon';
                messageBlock.style.color = "green";

                resetForm();
                const timerId = setTimeout( (() => {messageBlock.remove(); clearInterval(timerId)}), 4000);
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