import React, {Component} from 'react';
import './details-page.scss';
import PropertyCard from '../../components/property-card/property-card';
import {connect} from 'react-redux';
import {itemLoaded, itemRequested, itemError } from '../../redux/actions/itemDetailAC';
import { setDeal } from '../../redux/actions/filtersAC';
import RequestInfo from '../../components/request-info/request-info';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import { getItemById } from '../../api/api';

class DetailsPage extends Component {

    componentDidMount() {
        this.props.itemRequested();
        getItemById(this.props.itemId)
        .then(res => {
            res.item ? this.props.itemLoaded(res.item) : this.props.itemError();
        })
        .catch(err => console.log(err))
    }

    render() {
        const { itemId, item, loading, error } = this.props;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <Error />
        }

        const {...itemProps} = item;

        return(
            <div className="container details">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="details-prop-header mb-2">Luxury {item.type} for {this.props.deal}</div>
                        <div className="details-prop-basicdata mb-2">{item.price} &#8364; | {item.surface} m<sup>2</sup> | {item.bedrooms} bedrooms | {item.bathrooms} bathrooms</div>
                        <PropertyCard {...itemProps} slider classnames="detail"/>
                        
                        <div className = "mapouter details" > 
                            <div className = "gmap_canvas" > 
                                <iframe width = "600"
                                    title="maps-instance"
                                    height = "500"
                                    id = "gmap_canvas"
                                    src = {`https://maps.google.com/maps?q=${item.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder = "0"
                                    scrolling = "no"
                                    marginHeight = "0"
                                    marginWidth = "0" > 
                                </iframe><br/>
                            </div>
                        </div>
                    </div>                   
                    <div className="contact-form-details col-12 col-md-3">
                        <h2>{item.title}</h2>
                        <RequestInfo itemId={itemId} formId="request-info"/>
                    </div>
                </div>
            </div>
        )
    }   
}

/* "https://maps.google.com/maps?q=tarragona&t=&z=13&ie=UTF8&iwloc=&output=embed" */

const mapStateToProps = (state) => ({
    item: state.itemDetail.item,
    loading: state.itemDetail.loading,
    error: state.itemDetail.error,
    deal: state.deal
});

const mapDispatchToProps = {
    itemLoaded,
    itemRequested,
    itemError, 
    setDeal
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);