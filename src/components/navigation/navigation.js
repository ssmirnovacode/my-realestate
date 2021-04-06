import React from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const Navigation = (props) => {

    const handleMenuItemClick = (e) => {
        if (e.target.tagName === 'A') {
            document.getElementById('menu-toggle-btn').click();
        }
    };

    const handleNavItemActiveChange = (e) => {
       document.querySelectorAll('.mainnav').forEach(item => {
           item.classList.remove('activeItem');
       });
       if (e.target.tagName === "A") {
            e.target.parentNode.classList.add('activeItem');
       }
       else if (e.target.tagName === "LI") {
           e.target.classList.add('activeItem');
       }
    } 

    return(
        <nav className="navbar navbar-dark bg-dark">
                <Link className="nav-link" to={`${basePath}/`}><h1>My Real Estate</h1></Link>               

                <ul className="nav nav-pills ml-auto">
                    <li className="nav-item mainnav activeItem" onClick={(e) => handleNavItemActiveChange(e)}>
                        <Link className="nav-link" to={`${basePath}/`}>Home</Link>
                    </li>
                    <li className="nav-item mainnav" onClick={(e) => handleNavItemActiveChange(e)}>
                        <Link className="nav-link" to={`${basePath}/buy`} >Buy</Link>
                    </li>
                    <li className="nav-item mainnav" onClick={(e) => handleNavItemActiveChange(e)}>
                        <Link className="nav-link" to={`${basePath}/sell`} >Sell</Link>
                    </li>
                    <li className="nav-item mainnav" onClick={(e) => handleNavItemActiveChange(e)}>
                        <Link className="nav-link"  to={`${basePath}/rent`}>Rent</Link>
                    </li>
                    <li className="nav-item mainnav" onClick={(e) => handleNavItemActiveChange(e)}>
                        <Link className="nav-link" to={`${basePath}/about`} >About us</Link>
                    </li>
                    <li className="nav-item mainnav" onClick={(e) => handleNavItemActiveChange(e)}>
                        <Link className="nav-link" to={`${basePath}/contact`} >Contact us</Link>
                    </li>                   
                </ul>

                <button id="menu-toggle-btn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav" onClick={(e) => handleMenuItemClick(e)}>
                        <li className="nav-item active">
                            <Link className="nav-link drawer"  to={`${basePath}/`}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link drawer"  to={`${basePath}/buy`}>Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link drawer" to={`${basePath}/sell`} >Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link drawer" to={`${basePath}/rent`} >Rent</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link drawer" to={`${basePath}/about`} >About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link drawer" to={`${basePath}/contact`} >Contact us</Link>
                        </li>                   
                    </ul>
                </div>

            </nav>
    )
}

export default Navigation;