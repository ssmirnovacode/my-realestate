import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer jumbotron">
            <div className="footer_col">
                <h2><Link to="/buy" >My Real Estate</Link></h2>
                <ul className="footer_nav">
                    <li><Link className="footer nav-link" to="/buy" >Buy</Link></li>
                    <li><Link className="footer nav-link" to="/sell" >Sell</Link></li>
                    <li><Link className="footer nav-link" to="/rent">Rent</Link></li>
                    <li><Link className="footer nav-link" to="/about" >About us</Link></li>
                    <li><Link className="footer nav-link" to="/contact" >Contact us</Link></li>
                </ul>
            </div>
            <div className="footer_col">
                <address>Gran Vía, 100,<br/> 44455, Barcelona, Spain</address>
                <div>Tel: +34 999 111 22 33</div>
            </div>
            <div className="footer_col">
                <div>Find us on social media:</div>
                <div>Facebook Instagram Twitter Linkedin</div>
            </div>
        </footer>
    )
}

export default Footer;