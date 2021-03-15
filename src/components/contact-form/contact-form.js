import React from 'react';
import './contact-form.scss';
import {Link} from 'react-router-dom';

const ContactForm = ({itemId=''}) => {

    return(
        <section>
            <h3>Contact us</h3>
            <form>
                <div className="form-group">
                    {itemId ? <input type="hidden" className="form-control" name="id" value={itemId} /> : null}    
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="lastname" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="comments" placeholder="Comments "/>
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