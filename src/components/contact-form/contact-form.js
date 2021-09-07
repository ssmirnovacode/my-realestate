import React, { useState } from 'react';
import './contact-form.scss';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import basePath from '../../assets/basePath';
import validate from '../../utils/validation';
import { postRequest } from '../../api/api';

const ContactForm = ({ itemId='', formId }) => {

    const [message, setMessage] = useState({
        loading: false,
        type: '',
        text: ''
    });
  
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
            setMessage(message => ({
                ...message,
                loading: true
            }));
            postRequest(values, 'contact')
            .then(res => {
                setMessage({
                    loading: false,
                    type: 'success',
                    text: res.message 
                })
                resetForm();
                const timerId = setTimeout( (() => {setMessage({
                    loading: false,
                    type: '',
                    text: null
                }); clearInterval(timerId)}), 4000);
            })
            .catch(err => {
                setMessage({
                    loading: false,
                    type: 'error',
                    text: 'Server is not available. Try again later'
                })
                const timerId = setTimeout( (() => {setMessage({
                    loading: false,
                    type: '',
                    text: null
                }); clearInterval(timerId)}), 4000);
            })
        }
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
                <div className="submit_box">
                <button type="submit" className="btn btn-primary mt-3">Submit</button><span className="message_loading">{ message.loading && <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> }</span>
                </div>
                
                <div className={message.type === 'success' ? "message message_success" : "message message_error" }>{message.text}</div>
            </form><br/>

        </section>
    )
}

export default ContactForm;