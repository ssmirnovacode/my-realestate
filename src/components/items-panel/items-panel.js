import React, {Component} from 'react';
import './items-panel.scss';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal, resetPriceFilters} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import ItemsView from '../../components/items-view/items-view';

const reqService = new RequestService();

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        this.props.resetPriceFilters();
        reqService.getItems(baseURL + (this.props.deal ? this.props.deal : 'sale') + '-items') 
        .then(res => this.props.itemsLoaded(res))
        .catch( () => this.props.itemsError());
        //console.log(this.props.items)
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
            prevProps.activeFilters.sqmTo !== this.props.activeFilters.sqmTo   ) {

            //console.log(this.props.activeFilters);
            reqService.getItems(baseURL + this.props.deal + '-items') //debug on refesh page
            .then(res => this.props.itemsLoaded(res))
            .catch( () => this.props.itemsError());
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
    items: state.items,
    loading: state.loading,
    error: state.error,
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