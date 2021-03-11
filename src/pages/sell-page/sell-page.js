import React from 'react';
import './sell-page.scss';

const SellPage = () => {

    return(
        <div className="sell">
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

            <section className="sell_forms">
                <div className="sell_forms_property">
                    <h3>Property information</h3>
                    <form>
                        <div class="input-group mb-3">
                            <input className="mr-2 form-control" type="text" name="street" placeholder="Street and number" />
                            <input className="door form-control" type="text" name="door" placeholder="Building, apartment, door" />
                        </div>

                        <div class="input-group mb-3">
                            <input className="mr-2 form-control" type="text" name="zipcode" placeholder="Postal code"/>                       
                            <select class="custom-select" id="inputGroupSelect01">
                                <option value="0" selected disabled>Province</option>
                                <option value="1">Barcelona</option>
                                <option value="2">Tarragona</option>
                                <option value="3">Lleida</option>
                                <option value="3">Girona</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <select class="custom-select" id="inputGroupSelect02">
                                <option value="0">I'd like to sell my property</option>
                                <option value="1">I'd like to rent my property</option>                              
                            </select>
                        </div>
                    </form>
                </div>
                <div className="sell_forms_contact">
                    <h3>Contact information</h3>
                    <form>
                        
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SellPage;