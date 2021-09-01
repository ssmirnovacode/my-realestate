import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError } from '../../redux/actions/itemsAC';
import { setDeal, resetPriceFilters } from '../../redux/actions/filtersAC';
import ItemsView from '../../components/items-view/items-view';
import firebase from '../../firebase.config';

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        this.props.resetPriceFilters();
        const itemsRef = firebase.database().ref((this.props.deal ? this.props.deal : 'sale') + '-items');
            itemsRef.on('value', (snapshot) => {
                const items = snapshot.val();
                if (items) {
                    const itemList = [];
                    for (let id in items) {
                        itemList.push({ id, ...items[id] });
                    };
                    this.props.itemsLoaded(itemList);
                }
                else {
                    this.props.itemsError();
                }
            });
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

            //console.log(this.props.activeFilters);
            const itemsRef = firebase.database().ref(this.props.deal + '-items');
            itemsRef.on('value', (snapshot) => {
                const items = snapshot.val();
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                this.props.itemsLoaded(itemList);
            }, (err) => {this.props.itemsError(err)});
        }
    }

    render() {

        const {loading, error} = this.props;

        return(
            <ItemsView items={this.props.filteredItems} loading={loading} error={error} grid="" classnames="horizontal"/>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.properties.items,
    loading: state.properties.loading,
    error: state.properties.error,
    deal: state.deal,
    activeFilters: state.activeFilters
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    setDeal,
    resetPriceFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);