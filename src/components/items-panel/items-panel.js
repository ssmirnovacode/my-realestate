import React, {Component} from 'react';
import './items-panel.scss';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import ItemsView from '../../components/items-view/items-view';

const reqService = new RequestService();

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();

        reqService.getItems(baseURL + 'sale-items')
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
    error: state.error
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);