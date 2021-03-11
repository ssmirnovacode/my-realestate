import React from 'react';
import './navigation.scss';

const Navigation =() => {
    return(
        <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">My Real Estate</a>               

                <ul className="nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Buy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sell</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Rent</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>                   
                </ul>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sell</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rent</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>                   
                    </ul>
                </div>

            </nav>
    )
}

export default Navigation;