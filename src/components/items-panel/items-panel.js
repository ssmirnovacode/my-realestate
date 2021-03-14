import React, {Component} from 'react';
import './items-panel.scss';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import ItemsView from '../../components/items-view/items-view';

const reqService = new RequestService();

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        console.log(this.props.deal);
        reqService.getItems(baseURL + this.props.deal + '-items')
        .then(res => this.props.itemsLoaded(res))
        .catch( () => this.props.itemsError());
    }

    render() {

        const {items, loading, error} = this.props;

        return(
            <ItemsView items={items} loading={loading} error={error} grid="" classnames="horizontal"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);