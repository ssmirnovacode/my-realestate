import React, {Component} from 'react';
import './deal-search.scss';
import SearchForm from '../search-form/search-form';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import ItemsView from '../items-view/items-view';

const reqService = new RequestService();

class DealSearch extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        this.props.setDeal(this.props.dealType);
        reqService.getItems(baseURL + this.props.additionalURL)
        .then(res => this.props.itemsLoaded(res))
        .catch( () => this.props.itemsError());
    }

    render() {

        const {items, loading, error, deal} = this.props;

        const bcnItems = items.filter(item => item.province === 'Barcelona'),
            tgnItems = items.filter(item => item.province === 'Tarragona'),
            lleidaItems = items.filter(item => item.province === 'Lleida'),
            gironaItems = items.filter(item => item.province === 'Girona');

        return(
            <div className="container buy">         
                <SearchForm type={this.props.dealType} history={this.props.history} items={items} />

                <section>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 id="bcnSale" className="mb-4">Properties for {deal} in Barcelona</h3>
                            </div>
                        </div>
                        <div className="row">
                        <ItemsView items={bcnItems} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4 col-lg-3" lastItem ="3"/>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12">
                                <h3 id="tgnSale" className="mb-4">Properties for {deal} in Tarragona</h3>
                            </div>
                            <div className="row">
                                <ItemsView items={tgnItems} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4 col-lg-3" lastItem ="3"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12">
                                <h3 id="lleidaSale" className="mb-4">Properties for {deal} in Lleida</h3>
                            </div>
                            <div className="row">
                                <ItemsView items={lleidaItems} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4 col-lg-3" lastItem ="3"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12">
                                <h3 id="girSale" className="mb-4">Properties for {deal} in Girona</h3>
                            </div>
                            <div className="row">
                                <ItemsView items={gironaItems} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4 col-lg-3" lastItem ="3"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }  
};

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

export default connect(mapStateToProps, mapDispatchToProps)(DealSearch);