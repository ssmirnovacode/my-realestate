import React, {Component} from 'react';
import './buy-page.scss';
import SearchForm from '../../components/search-form/search-form';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import ItemsView from '../../components/items-view/items-view';

const reqService = new RequestService();

/* const additionalURL = 'sale-items';
const dealType = "sale"; */

class BuyPage extends Component {

    constructor(props) {
        super(props);
        
        this.additionalURL = 'sale-items';
        this.dealType = "sale";
    }

    componentDidMount() {
        this.props.itemsRequested();
        this.props.setDeal('sale');
        reqService.getItems(baseURL + this.additionalURL)
        .then(res => this.props.itemsLoaded(res))
        .catch( () => this.props.itemsError());
    }

    render() {

        const {items, loading, error} = this.props;

        return(
            <div className="container buy">         
                <SearchForm type={this.dealType} history={this.props.history} />

                <section>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <ItemsView items={items} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4 col-lg-3"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BuyPage);