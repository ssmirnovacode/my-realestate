import React from 'react';
import './property-card.scss';
import {Link} from 'react-router-dom';

const PropertyCard = (props) => {
    return(
        <div className="card mb-5" >
            <img className="card-img-top" src="http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg" alt="Card pic" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}

export default PropertyCard;