import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const Footer = () => {
    return(
        <footer className="footer jumbotron">
            <div className="footer_col navmenu">
                <div className="footer headerlink"><Link to={`${basePath}/`} >My Real Estate</Link></div>
                <ul className="footer_nav">
                    <li><Link className="footer nav-link" to={`${basePath}/buy`} >Buy</Link></li>
                    <li><Link className="footer nav-link" to={`${basePath}/sell`} >Sell</Link></li>
                    <li><Link className="footer nav-link" to={`${basePath}/rent`}>Rent</Link></li>
                    <li><Link className="footer nav-link" to={`${basePath}/about`} >About us</Link></li>
                    <li><Link className="footer nav-link" to={`${basePath}/contact`} >Contact us</Link></li>
                </ul>
            </div>
            <div className="footer_col">
                <address>Passeig de Gracia, 15,<br/> 08007, Barcelona, Spain</address>
                <div>Tel: +34 999 111 22 33</div>
            </div>
            <div className="footer_col">
                <div className="mb-2">Find us on social media:</div>
                <div>
                    <a href={'https://github.com/ssmirnovacode'} ><i className="fa fa-facebook-square"></i> </a>
                    <a href={'https://github.com/ssmirnovacode'} ><i className="fa fa-linkedin-square"></i></a>
                    <a href={'https://github.com/ssmirnovacode'} ><i className="fa fa-github-square"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;