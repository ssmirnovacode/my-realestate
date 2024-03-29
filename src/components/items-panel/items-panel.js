import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError } from '../../redux/actions/itemsAC';
import { setDeal, resetPriceFilters } from '../../redux/actions/filtersAC';
import ItemsView from '../../components/items-view/items-view';
import {filterItems, sortItems} from '../../utils/filterFunctions';
import { getItems } from '../../api/api';

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        this.props.resetPriceFilters();
        getItems(this.props.deal ? this.props.deal : 'sale')
        .then(res => {
            res.items.length > 0 ? this.props.itemsLoaded(res.items) : this.props.itemsError()
        })
        .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeFilters.province !== this.props.activeFilters.province ||
            prevProps.activeFilters.comarca !== this.props.activeFilters.comarca ||
            prevProps.activeFilters.city !== this.props.activeFilters.city ||
            prevProps.activeFilters.apartment !== this.props.activeFilters.apartment ||
            prevProps.activeFilters.flat !== this.props.activeFilters.flat ||
            prevProps.activeFilters.house !== this.props.activeFilters.house ||
            prevProps.activeFilters.duplex !== this.props.activeFilters.duplex ||
            prevProps.activeFilters.priceFrom !== this.props.activeFilters.priceFrom || 
            prevProps.activeFilters.priceTo !== this.props.activeFilters.priceTo ||
            prevProps.activeFilters.sqmFrom !== this.props.activeFilters.sqmFrom || 
            prevProps.activeFilters.sqmTo !== this.props.activeFilters.sqmTo ||
            prevProps.activeFilters.bedroomsMin !== this.props.activeFilters.bedroomsMin || 
            prevProps.activeFilters.bathroomsMin !== this.props.activeFilters.bathroomsMin   ) {

            getItems(this.props.deal)
            .then(res => {
                console.log(res.items);
                res.items.length > 0 ? this.props.itemsLoaded(res.items) : this.props.itemsError()
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        const {items, loading, error, activeFilters, sortBy} = this.props;

        const filteredItems = filterItems(items, activeFilters); 
        const itemsToRender = sortItems(filteredItems, sortBy);
        const count = filteredItems.length;

        return(
            <>
                <div className="mb-2"> {count} options found </div>
                <ItemsView items={itemsToRender} loading={loading} error={error} grid="" classnames="horizontal"/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.properties.items,
    loading: state.properties.loading,
    error: state.properties.error,
    deal: state.deal,
    activeFilters: state.activeFilters,
    sortBy: state.sortBy
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    setDeal,
    resetPriceFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);