import React, {Component} from 'react';
import './home-page.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError } from '../../redux/actions/itemsAC';
import { setDeal, setFilters } from '../../redux/actions/filtersAC';
import ItemsView from '../../components/items-view/items-view';
import basePath from '../../assets/basePath';
import { getItems } from '../../api/api';

class Home extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        this.props.setDeal('sale');
        getItems(this.props.deal)
        .then(res => {
            console.log(res.items);
            res? this.props.itemsLoaded(res.items) : this.props.itemsError()
        })
        .catch(err => console.log(err));
    }

    handleImgLinkClick = (provName) => {
        const filtersObj = this.props.activeFilters ? this.props.activeFilters : {
            apartment: true,
            flat: true,
            house: true,
            duplex: true,
            province: 'all',
            comarca: 'all',
            city: 'all',
            priceFrom: 0,
            priceTo: 100000000,
            sqmFrom: 0,
            sqmTo: 100000,
            bedroomsMin: null,
            bathroomsMin: null
        };
        //console.log(filtersObj);
        filtersObj.province = provName;
        this.props.setFilters(filtersObj);
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
                        MyRealEstate has an extensive portfolio of properties in the very best locations in the provinces of Barcelona, Tarragona, Lleida and Girona.
                        
                        </p>
                        <p>Best real estate at the most convenient prices only a click away!</p>
                    </div>
                </div>

                <div className="row home">
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item ">
                        <Link to={`${basePath}/search`} onClick={() => this.handleImgLinkClick("Barcelona")}>
                            <img src="https://b.radikal.ru/b31/2103/5a/394765249676.jpg" alt="Barcelona"/>
                            <div className="home provinces-block_item_title">Barcelona</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item ">
                        <Link to={`${basePath}/search`} onClick={() => this.handleImgLinkClick("Tarragona")}>
                            <img src="https://b.radikal.ru/b38/2103/09/a5d19f76b108.jpg" alt="Tarragona" />
                            <div className="home provinces-block_item_title">Tarragona</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item">
                        <Link to={`${basePath}/search`} onClick={() => this.handleImgLinkClick("Lleida")}>
                            <img src="https://b.radikal.ru/b28/2103/7b/11338d0bf154.jpg" alt="Lleida" />
                            <div className="home provinces-block_item_title">Lleida</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 home provinces-block_item">
                        <Link to={`${basePath}/search`} onClick={() => this.handleImgLinkClick("Girona")}>
                            <img src="https://b.radikal.ru/b00/2103/56/7d9ffb5a917e.jpg" alt="Girona" />
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
                        <img src="https://b.radikal.ru/b09/2104/90/634af5092ea3.jpg" alt="my real estate" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4>myRealEstate</h4>
                        <p>
                        MyRealEstate is an estate agency specialized in the marketing of exclusive properties in the best areas of Barcelona, Tarragona, Lleida and Girona. The brand also has a division specializing in the marketing of offices in prime areas of Barcelona and Tarragona.

                        As an expert consultancy, the firm has a wide portfolio of properties and a sales team made up of highly qualified, specialized professionals with extensive experience in the industry.

                        MyRealEstate offers a close-at-hand and high-quality service, where its customers can closely follow the entire process required in the purchase, sale or rental of property. 

                        
                        </p>
                        <div className="mb-2">Find us on social media:</div>
                            <div>
                                <a href={'https://github.com/ssmirnovacode/my-realestate'} target="blank" ><i className="fa fa-facebook-square"></i></a>
                                <a href={'https://github.com/ssmirnovacode/my-realestate'} target="blank" ><i className="fa fa-linkedin-square"></i></a>
                                <a href={'https://github.com/ssmirnovacode/my-realestate'} target="blank" ><i className="fa fa-github-square"></i></a>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.properties.items,
    loading: state.properties.loading,
    error: state.properties.error,
    deal: state.deal
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError, 
    setDeal,
    setFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);