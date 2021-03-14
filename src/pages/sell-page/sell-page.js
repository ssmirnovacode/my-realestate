import React from 'react';
import './sell-page.scss';
import YourProperty from '../../components/your-property/your-property';

const SellPage = () => {

    return(
        <div className="container sell">
            <h2>Sell or rent my property</h2>
            <section className="sell_text">
                <p>You will have an expert real estate consultant in your area who will accompany you throughout the process of selling your property, from the valuation to accompanying the signature in the notary.</p>
                <ul className="sell_list">
                    <li>We take professional photographs of your home and generate descriptions in several languages.</li>
                    <li>We publish your property in more than 50 national and international portals.</li>
                    <li>Your property will have maximum visibility; we have a database of more than 80,000 contacts and more than 100,000 unique users per month on our website.</li>
                    <li>Advertising in the press</li>
                </ul>
                <p>At Aproperties we take care of the entire counseling process in the sale or rental of your property. From the first moment we offer you all our experience through a professional, committed and efficient team. We offer a comprehensive service so that the sale or rental of your property is a success.</p>
            </section>

            <YourProperty />
        </div>
    )
}

export default SellPage;