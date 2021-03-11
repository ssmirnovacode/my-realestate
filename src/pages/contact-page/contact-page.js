import React from 'react';
import './contact-page.scss';
import {Link} from 'react-router-dom';

const ContactPage = () => {

    return(
        <div className="container contact">
            <div className="row">

                <div className="col-12 col-md-9">
                    <section>
                        <h2>Want to sell or rent your property?</h2>
                        <p>In aProperties we handle the entire process of advising on the sale or rental of your property. From the moment we offer our expertise through a professional, committed and effective team.
                            We offer a comprehensive service for the sale or rental of your property is a success.
                        </p>
                    </section>
                </div>

                <div className="col-12 col-md-3">
                    <section>
                        <h3>Contact us</h3>
                        <form>
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
                                <label className="form-check-label ml-1" htmlFor="privpolicy">I have read and accept the <Link>privacy policy</Link></label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default ContactPage;