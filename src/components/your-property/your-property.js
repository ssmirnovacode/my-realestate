import React from 'react';
import './your-property.scss';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import basePath from '../../assets/basePath';
import validate from '../../services/validation';
import firebase from '../../firebase.config';

const YourProperty = (props) => {

    //const {formId} = props;

    const formik = useFormik({
        initialValues: {
            streetnum: '',
            door: '',
            zipcode: '',
            province: '',
            deal: 'sale',
            name: '',
            lastname: '',
            phone: '',
            email: '',
            comments: ''/* ,
            privacy: '' */
        },
        validate,
        onSubmit: (values, { resetForm }, e) => {

            const messageBlock = document.createElement('div');
            document.getElementById('your-property-form').parentNode.appendChild(messageBlock);
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
        <section className="sell_forms">
                <form id="your-property-form" onSubmit={(e) => formik.handleSubmit(e)}>
                    <div className="sell_forms_property">
                        <h3>Property information</h3>
                        
                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="streetnum" placeholder="Street and number"  
                                    onChange={formik.handleChange} value={formik.values.streetnum}/>
                                <input className="door form-control" type="text" name="door" placeholder="Building, apartment, door"  
                                    onChange={formik.handleChange} value={formik.values.door}/>
                            </div>

                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="zipcode" placeholder="Postal code"
                                    onChange={formik.handleChange} value={formik.values.zipcode}/>                       
                                <select className="custom-select" name="province"
                                        onChange={formik.handleChange} value={formik.values.province}>
                                    <option value="Barcelona">Barcelona</option>
                                    <option value="Tarragona">Tarragona</option>
                                    <option value="Lleida">Lleida</option>
                                    <option value="Girona">Girona</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <select className="custom-select" name="deal"
                                         onChange={formik.handleChange} value={formik.values.deal}>
                                    <option value="sale">I'd like to sell my property</option>
                                    <option value="rent">I'd like to rent my property</option>                              
                                </select>
                            </div>
                    </div>

                    <div className="sell_forms_contact">
                        <h3>Contact information</h3>
                        
                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="name" placeholder="Name" required onChange={formik.handleChange} value={formik.values.name} />
                                <input className="door form-control" type="text" name="lastname" placeholder="Last name" onChange={formik.handleChange} value={formik.values.lastname} />                     
                            </div>
                            {formik.errors.name ? <div className="errMess">{formik.errors.name}</div> : null}
                            {formik.errors.lastname ? <div className="errMess">{formik.errors.lastname}</div> : null}

                            <div className="input-group mb-3">
                                <input className="mr-2 form-control" type="text" name="phone" placeholder="Phone number"  onChange={formik.handleChange} value={formik.values.phone}/>
                                <input className="door form-control" type="email" name="email" placeholder="Email" required onChange={formik.handleChange} value={formik.values.email}/>
                                
                            </div>
                            {formik.errors.email ? <div className="errMess">{formik.errors.email}</div> : null}
                            {formik.errors.phone ? <div className="errMess">{formik.errors.phone}</div> : null}

                            <div className="input-group mb-3">
                                <textarea className="form-control" name="comments" placeholder="Comments "  onChange={formik.handleChange} value={formik.values.comments}/>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="privacy" required 
                                   /* onChange={formik.handleChange} value={formik.values.privacy} */ />
                                <label className="form-check-label ml-1" htmlFor="privpolicy">I have read and accept the <Link to={`${basePath}/privacy`}>privacy policy</Link></label>
                            </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 mb-3">Submit</button>
                </form>
            </section>
    )
}

export default YourProperty;