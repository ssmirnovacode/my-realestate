import React from 'react';
import './property-card.scss';
import {Link} from 'react-router-dom';

const PropertyCard = (props) => {

    const {id, img, title, province, comarca, city, type, surface, price, bedrooms, bathrooms} = props;

    return(
        <div className="card mb-5" >
            <Link to={`properties/{id}`}><img className="card-img-top" src={img} alt={title} /></Link>
            <div className="card-body">
                <div className="card-subheader-top">
                    <div className="card-id">{id}</div>
                    <div className="card-price">{price} &#8364; </div>
                </div>
                
                <h4 className="card-title">{title}</h4>
                <div className="card-type">{type}</div>
                <div className="card-geo">{province} | {comarca} | {city} </div>
                <div className="card-space">{surface} m<sup>2</sup> | {bedrooms} bedrooms | {bathrooms} bathrooms</div>
                <Link to={`properties/{id}`} className="btn btn-primary mt-2">Request information</Link>
            </div>
        </div>
    )
}

export default PropertyCard;