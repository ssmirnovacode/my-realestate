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