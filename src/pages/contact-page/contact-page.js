import React from 'react';
import './contact-page.scss';
import ContactForm from '../../components/contact-form/contact-form';

const ContactPage = () => {

    return(
        <div className="container contact">
            <div className="row">

                <div className="col-12 col-md-9">
                    <section>
                        <h2>Want to sell or rent your property?</h2>
                        <p>In MyRealEstate we handle the entire process of advising on the sale or rental of your property. From the moment we offer our expertise through a professional, committed and effective team.
                            We offer a comprehensive service for the sale or rental of your property is a success.
                        </p>
                    </section>
                </div>

                <div className="col-12 col-md-3">
                    <ContactForm formId="usual-feedback"/>
                </div>

            </div>
        </div>
    )
}

export default ContactPage;