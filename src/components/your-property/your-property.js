import React from 'react';
import './your-property.scss';
//import {Link} from 'react-router-dom';

const YourProperty = () => {

    return(
        <section className="sell_forms">
                <form>
                    <div className="sell_forms_property">
                        <h3>Property information</h3>
                        
                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="street" placeholder="Street and number" />
                                <input className="door form-control" type="text" name="door" placeholder="Building, apartment, door" />
                            </div>

                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="zipcode" placeholder="Postal code"/>                       
                                <select defaultValue="0" className="custom-select" id="inputGroupSelect01">
                                    <option value="0" disabled>Province</option>
                                    <option value="1">Barcelona</option>
                                    <option value="2">Tarragona</option>
                                    <option value="3">Lleida</option>
                                    <option value="3">Girona</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <select className="custom-select" id="inputGroupSelect02">
                                    <option value="0">I'd like to sell my property</option>
                                    <option value="1">I'd like to rent my property</option>                              
                                </select>
                            </div>
                    </div>

                    <div className="sell_forms_contact">
                        <h3>Contact information</h3>
                        
                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="name" placeholder="Name" />
                                <input className="door form-control" type="text" name="lastname" placeholder="Last name" />
                            </div>

                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="phone" placeholder="Phone number" />
                                <input className="door form-control" type="email" name="email" placeholder="Email" />
                            </div>

                            <div className="input-group mb-3">
                                <textarea className="form-control" name="comments" placeholder="Comments "/>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label ml-1" htmlFor="privpolicy">I have read and accept the <span >privacy policy</span></label>
                            </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </section>
    )
}

export default YourProperty;