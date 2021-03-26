import React, {Component} from 'react';
import './home-page.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import ItemsView from '../../components/items-view/items-view';
import RequestService from '../../services/requests';
import baseURL from '../../assets/baseURL';
import basePath from '../../assets/basePath';

const reqService = new RequestService();

class Home extends Component {

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
                        <h2 className="mb-3">Luxury Real Estate</h2>
                        <h5 className="mb-3">Four catalan provinces</h5>
                        <p>
                        aProperties has an extensive portfolio of properties in the very best locations in the provinces of Barcelona, Tarragona, Lleida and Girona.
                        
                        </p>
                        <p>Best real estate at the most convenient prices only a click away!</p>
                    </div>
                </div>

                <div className="row home">
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item ">
                        <Link to={`${basePath}/buy`}>
                            <img src="https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/spain/offices/hero-image-emea-offices-barcelona-small-750x480.jpg?rev=52c4d652a22845d6a53f001f0f16218e" alt="Barcelona"/>
                            <div className="home provinces-block_item_title">Barcelona</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item ">
                        <Link to={`${basePath}/buy`}>
                            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/a6/3d.jpg" alt="Tarragona" />
                            <div className="home provinces-block_item_title">Tarragona</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item">
                        <Link to={`${basePath}/buy`}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Lleida_-_panoramio_-_Jorge_Franganillo.jpg" alt="Lleida" />
                            <div className="home provinces-block_item_title">Lleida</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item">
                        <Link to={`${basePath}/buy`}>
                            <img src="https://cdn.britannica.com/35/190035-050-C44235DF/Girona-Spain-Onar-River.jpg" alt="Girona" />
                            <div className="home provinces-block_item_title">Girona</div>
                        </Link>
                    </div>
                </div>

                <div className="row home featured">
                    <div className="col-12 mb-3"><h3>Featured properties</h3><hr/></div>
                    <ItemsView items={items} loading={loading} error={error} grid="col-12 col-sm-6 col-md-4" lastItem="5"/>
                </div>

                <div className="row home aboutus">
                    <div className="col-12 col-md-6 mb-3">
                        <img src="https://www.erco.com/projects/focus/report/real-estate-agency-engel-voelkers-metropolitan-market-center-madrid-6167/images/eur-erco-real-estate-agency-engel-voelkers-metropolitan-market-center-madrid-report-11-2.jpg" alt="my real estate" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4>myRealEstate</h4>
                        <p>
                        aProperties is an estate agency specialized in the marketing of exclusive properties in the best areas of Barcelona, Madrid and Valencia. The brand also has a division specializing in the marketing of offices in prime areas of Barcelona and Madrid.

                        As an expert consultancy, the firm has a wide portfolio of properties and a sales team made up of highly qualified, specialized professionals with extensive experience in the industry.

                        aProperties offers a close-at-hand and high-quality service, where its customers can closely follow the entire process required in the purchase, sale or rental of property. 

                        
                        </p>
                        <div>Facebook Instagram Twitter Linkedin</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);