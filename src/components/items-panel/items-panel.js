import React, {Component} from 'react';
import './items-panel.scss';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import ItemsView from '../../components/items-view/items-view';

const reqService = new RequestService();

const filterItems = (items, filters) => {
    return items.filter(item => (filters.apartment === true && item.type === 'apartment') || 
                        (filters.flat === true && item.type === 'flat') || (filters.house === true && item.type === 'house')
                        || (filters.duplex === true && item.type === 'duplex') )
        .filter(item => item.province === filters.province)
        .filter(item => item.comarca === filters.comarca )
        /* .filter(item => item.city === filters.city) */;
}

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        console.log(this.props.activeFilters);
        //console.log(this.props.deal); //this is null on refresh - debug
        reqService.getItems(baseURL + this.props.deal + '-items') //debug on refesh page
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
            prevProps.activeFilters.duplex !== this.props.activeFilters.duplex  ) {
            //console.log('updated');
            console.log(this.props.activeFilters);
            reqService.getItems(baseURL + this.props.deal + '-items') //debug on refesh page
            .then(res => this.props.itemsLoaded(res))
            .catch( () => this.props.itemsError());
        }
        /* else console.log('same'); */
    }

    render() {

        const {items, loading, error} = this.props;

        const filteredItems = filterItems(items, this.props.activeFilters);

        return(
            <ItemsView items={filteredItems} loading={loading} error={error} grid="" classnames="horizontal"/>
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
    setDeal
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);