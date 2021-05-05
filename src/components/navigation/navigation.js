import React, {useState} from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const menuItems = [
    {
        id: 0,
        label: 'Home',
        link: ''
    },
    {
        id: 1,
        label: 'Buy',
        link: 'buy'
    },
    {
        id: 2,
        label: 'Sell',
        link: 'sell'
    },
    {
        id: 3,
        label: 'Rent',
        link: 'rent'
    },
    {
        id: 4,
        label: 'About us',
        link: 'about'
    },
    {
        id: 5,
        label: 'Contact us',
        link: 'contact'
    }
];

const Navigation = (props) => {

    const [activeItem, setActiveItem] = useState(0);

    const handleMenuItemClick = (e) => {
        if (e.target.tagName === 'A') {
            document.getElementById('menu-toggle-btn').click(); //closing the burger menu when a menu link is clicked
        }
    };

    const handleNavItemActiveChange = (id) => {
        setActiveItem(id);
    } 

    return(
        <nav className="navbar navbar-dark bg-dark">
                <Link className="nav-link" to={`${basePath}/`}><h1>My Real Estate</h1></Link>               

                <ul className="nav nav-pills ml-auto">
                    {
                        menuItems.map(item => {
                            return(
                                <li key={item.id} id={item.id} className={activeItem === item.id ? "nav-item mainnav activeItem" : "nav-item mainnav"} onClick={() => handleNavItemActiveChange(item.id)}>
                                    <Link className="nav-link" to={`${basePath}/${item.link}`}>{item.label}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <button id="menu-toggle-btn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav" onClick={(e) => handleMenuItemClick(e)}>
                        {
                            menuItems.map(item => {
                                return(
                                    <li key={item.id} id={item.id} className={activeItem === item.id ? "nav-item active" : "nav-item"} >
                                        <Link className="nav-link drawer" to={`${basePath}/${item.link}`}  onClick={() => handleNavItemActiveChange(item.id)}>{item.label} 
                                        {activeItem === item.id ? <span className="sr-only">(current)</span> : null}   </Link>
                                    </li>
                                )
                            })
                        }            
                    </ul>
                </div>

            </nav>
    )
}

export default Navigation;