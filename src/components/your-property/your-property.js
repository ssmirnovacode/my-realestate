import React from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import basePath from '../../assets/basePath';
import validate from '../../utils/validation';
import { provinces } from '../../utils/filterArrays';
import { postRequest } from '../../api/api';

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

            postRequest(values, 'send-request')
            .then(res => {
                messageBlock.innerHTML = res.message;
                messageBlock.style.color = "green";
                resetForm();
                const timerId = setTimeout( (() => {messageBlock.remove(); clearInterval(timerId)}), 4000);
            })
            .catch(err => {
                messageBlock.innerHTML = err.message;
                messageBlock.style.color = "red";
            })
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
                                    {
                                        provinces.map((p,i) => {
                                            return(
                                                <option key={p+i} value={p}>{p}</option>
                                            )
                                        })
                                    }
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