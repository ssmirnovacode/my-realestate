import React, {Component} from 'react';
import './home-page.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import ItemsView from '../../components/items-view/items-view';
import RequestService from '../../services/requests';
import baseURL from '../../assets/baseURL';

const reqService = new RequestService();

class HomePage extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        //this.props.setDeal('sale');
        reqService.getItems(baseURL + 'sale-items')
        .then(res => this.props.itemsLoaded(res))
        .catch( () => this.props.itemsError());
    }

    render() {
        const {items, loading, error} = this.props;

        return(
            <div className="container">
                <div className="row home">
                    <div className="col-12">
                        <h2>Luxury Real Estate</h2>
                        <h3>Barcelona · Tarragona · Lleida · Girona</h3>
                        <p>
                        aProperties has an extensive portfolio of properties in the very best locations in the city of Barcelona, Madrid and Valencia.
                        </p>
                    </div>
                </div>

                <div className="row home">
                    <div className="col-12 col-md-6 col-lg-3 home provinces-block_item ">
                        <Link to="/buy">
                            <img src="https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/spain/offices/hero-image-emea-offices-barcelona-small-750x480.jpg?rev=52c4d652a22845d6a53f001f0f16218e" alt="Barcelona"/>
                            <div className="home provinces-block_item_title">Barcelona</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 home provinces-block_item ">
                        <Link to="/buy">
                            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/a6/3d.jpg" alt="Tarragona" />
                            <div className="home provinces-block_item_title">Tarragona</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 home provinces-block_item">
                        <Link to="/buy">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Lleida_-_panoramio_-_Jorge_Franganillo.jpg" alt="Lleida" />
                            <div className="home provinces-block_item_title">Lleida</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 home provinces-block_item">
                        <Link to="/buy">
                            <img src="https://cdn.britannica.com/35/190035-050-C44235DF/Girona-Spain-Onar-River.jpg" alt="Girona" />
                            <div className="home provinces-block_item_title">Girona</div>
                        </Link>
                    </div>
                </div>

                <div className="row home featured">
                    <div className="col-12 mb-3"><h3>Featured properties</h3><hr/></div>
                    <ItemsView items={items} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4" lastItem="5"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);