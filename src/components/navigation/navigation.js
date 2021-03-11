import React from 'react';
import './navigation.scss';
import {Link} from 'react-router-dom';

const Navigation =() => {
    return(
        <nav className="navbar navbar-dark bg-dark">
                <Link className="nav-link" to="/">My Real Estate</Link>               

                <ul className="nav nav-pills ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/buy" >Buy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sell" >Sell</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/rent">Rent</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" >About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" >Contact us</Link>
                    </li>                   
                </ul>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link"  to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/buy">Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sell" >Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rent" >Rent</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact us</Link>
                        </li>                   
                    </ul>
                </div>

            </nav>
    )
}

export default Navigation;