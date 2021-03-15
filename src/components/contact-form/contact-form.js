import React from 'react';
import './contact-form.scss';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';

const ContactForm = ({itemId=''}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            comments: ''
        },
        onSubmit: (values, { resetForm }) => {

            if (itemId) {
                values.itemId = itemId;
            }
            console.log(values);
                 
        },
      });

    return(
        <section>
            <h3>Contact us</h3>
            <form onSubmit={formik.handleSubmit}>
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
            </form>
        </section>
    )
}

export default ContactForm;