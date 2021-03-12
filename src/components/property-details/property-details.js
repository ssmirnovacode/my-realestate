import React from 'react';
import PropertyCard from '../property-card/property-card';
import './property-details.scss';

const PropertyDetails = (props) => {
    const {id, img, images, title, text, province, comarca, city, deal, type, surface, price, bedrooms, bathrooms} = props.item
    const {...itemProps} = props.item;
    
    return(
        <div className="container">
            <div className="header-info">
                <div className="card-info">{price} | {surface} m<sup>2</sup> | {bedrooms} bedrooms | {bathrooms} bathrooms</div>
            </div>
            <PropertyCard {...itemProps} />
        </div>
    )
}

export default PropertyDetails;