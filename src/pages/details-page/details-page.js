import React, {Component} from 'react';
import './details-page.scss';
import PropertyCard from '../../components/property-card/property-card';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import RequestInfo from '../../components/request-info/request-info';

class DetailsPage extends Component {

    render() {
        const {itemId, items} = this.props;
        const targetItem = items.filter(item => item.id === itemId)[0];

        const {...itemProps} = targetItem;

        /* const initMap = (lat, lng) => {
            // The location of Uluru
            const uluru = { lat: -25.344, lng: 131.036 };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("map"), {
              zoom: 4,
              center: uluru,
            });
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({
              position: uluru,
              map: map,
            });
          } */

        return(
            <div className="container details">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="details-prop-header mb-2">Luxury {targetItem.type} for {this.props.deal}</div>
                        <div className="details-prop-basicdata mb-2">{targetItem.price} &#8364; | {targetItem.surface} m<sup>2</sup> | {targetItem.bedrooms} bedrooms | {targetItem.bathrooms} bathrooms</div>
                        <PropertyCard {...itemProps} slider classnames="detail"/>
                    </div>
                    
                    <div className="contact-form-details col-12 col-md-3">
                        <h2>{targetItem.title}</h2>
                        <RequestInfo itemId={itemId} formId="request-info"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" id="map">
                        <div className = "mapouter" > 
                            <div className = "gmap_canvas" > 
                                <iframe width = "600"
                                    title="maps-instance"
                                    height = "500"
                                    id = "gmap_canvas"
                                    src = "https://maps.google.com/maps?q=passeig%20de%20gracia%2015&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder = "0"
                                    scrolling = "no"
                                    marginHeight = "0"
                                    marginWidth = "0" > 
                                </iframe><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

const mapStateToProps = (state) => ({
    items: state.items,
    loading: state.loading,
    error: state.error,
    deal: state.deal
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError, 
    setDeal
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);