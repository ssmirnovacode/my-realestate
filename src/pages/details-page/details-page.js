import React, {Component} from 'react';
import './details-page.scss';
import PropertyCard from '../../components/property-card/property-card';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError } from '../../redux/actions/itemsAC';
import { setDeal } from '../../redux/actions/filtersAC';
import RequestInfo from '../../components/request-info/request-info';

class DetailsPage extends Component {

    render() {
        const {itemId, items} = this.props;
        const targetItem = items.length > 0 ? items.filter(item => item.id === itemId)[0] : JSON.parse(localStorage.getItem(itemId));
        
        localStorage.setItem(itemId, JSON.stringify(targetItem));

        const {...itemProps} = targetItem;

        return(
            <div className="container details">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="details-prop-header mb-2">Luxury {targetItem.type} for {this.props.deal}</div>
                        <div className="details-prop-basicdata mb-2">{targetItem.price} &#8364; | {targetItem.surface} m<sup>2</sup> | {targetItem.bedrooms} bedrooms | {targetItem.bathrooms} bathrooms</div>
                        <PropertyCard {...itemProps} slider classnames="detail"/>
                        
                        <div className = "mapouter details" > 
                            <div className = "gmap_canvas" > 
                                <iframe width = "600"
                                    title="maps-instance"
                                    height = "500"
                                    id = "gmap_canvas"
                                    src = {`https://maps.google.com/maps?q=${targetItem.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder = "0"
                                    scrolling = "no"
                                    marginHeight = "0"
                                    marginWidth = "0" > 
                                </iframe><br/>
                            </div>
                        </div>
                    </div>                   
                    <div className="contact-form-details col-12 col-md-3">
                        <h2>{targetItem.title}</h2>
                        <RequestInfo itemId={itemId} formId="request-info"/>
                    </div>
                </div>
            </div>
        )
    }   
}

/* "https://maps.google.com/maps?q=tarragona&t=&z=13&ie=UTF8&iwloc=&output=embed" */

const mapStateToProps = (state) => ({
    items: state.properties.items,
    loading: state.properties.loading,
    error: state.properties.error,
    deal: state.deal
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError, 
    setDeal
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);