import React from 'react';
import './property-card.scss';
import {Link} from 'react-router-dom';
import Carousel from '../carousel/carousel';
import basePath from '../../assets/basePath';

const PropertyCard = (props) => {

    const {_id, img, title, text, province, comarca, city, type, surface, price, bedrooms, bathrooms, classnames, slider, images} = props;

    const imgBlock = slider ?  <Carousel images={images} title={title} />  : 
                    <Link to={`${basePath}/properties/${_id}`}>
                        <div className="card-img-top-wrapper">
                            <img className="card-img-top" src={img} alt={title} />
                        </div>
                    </Link>;
    
    return(
        <div className={"card mb-5 " + classnames} >
            {imgBlock}
            <div className="card-body">
                <div className="card-subheader-top">
                    <div className="card-id">{_id.slice(-12)}</div>
                    <div className="card-price">{price} &#8364; </div>
                </div>
                
                <h4 className="card-title">{title}</h4>
                <div className="card-type">{type}</div>
                <div className="card-geo">{province} | {comarca} | {city} </div>
                {
                    classnames ? <div className="card-text mb-2 mt-2">{text}</div> : null
                }
                <div className="card-space">{surface} m<sup>2</sup> | {bedrooms} bedrooms | {bathrooms} bathrooms</div>
                <Link to={`${basePath}/properties/${_id}`} className="btn btn-primary mt-2">Request information</Link>
            </div>
        </div>
    )
}

export default PropertyCard;