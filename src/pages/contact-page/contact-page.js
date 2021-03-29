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
                        <p className="mb-3">In MyRealEstate we handle the entire process of advising on the sale or rental of your property. From the moment we offer our expertise through a professional, committed and effective team.
                            We offer a comprehensive service for the sale or rental of your property is a success.
                        </p>
                    
                    <div className = "mapouter mt-3" > 
                            <div className = "gmap_canvas" > 
                                <iframe width = "600"
                                    title="maps-instance"
                                    height = "500"
                                    id = "gmap_canvas"
                                    src = "https://maps.google.com/maps?q=passeig%20de%20gracia%2015&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder = "0"
                                    scrolling = "no"
                                    marginHeight = "0"
                                    marginWidth = "0" > 
                                </iframe><br/>
                            </div>
                        </div>
                        </section>
                </div>

                <div className="col-12 col-md-3">
                    <ContactForm formId="usual-feedback"/>
                </div>

                <div className="col-12" id="map">
                        
                    </div>

            </div>
        </div>
    )
}

export default ContactPage;