import React, {Component} from 'react';
import './details-page.scss';
import PropertyCard from '../../components/property-card/property-card';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';

class DetailsPage extends Component {

    render() {
        const {itemId, items} = this.props;
        const targetItem = items.filter(item => item.id === itemId)[0];

        const {...itemProps} = targetItem;

        return(
            <div className="container details">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <PropertyCard {...itemProps} classnames="detail"/>
                    </div>
                    <div className="col-12 col-md-3">
                        {/* <RequestInfo /> */}
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