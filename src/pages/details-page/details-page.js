import React, {Component} from 'react';
import './details-page.scss';
import PropertyCard from '../../components/property-card/property-card';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError } from '../../redux/actions/itemsAC';
import { setDeal } from '../../redux/actions/filtersAC';
import RequestInfo from '../../components/request-info/request-info';
import firebase from '../../firebase.config';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const fetchItems = (itemsRef, allItemsArr) => {
        itemsRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                for (let id in items) {
                    allItemsArr.push({ id, ...items[id] });
                };
            }
            console.log(allItemsArr)
            return allItemsArr;
        });
}

class DetailsPage extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        const arr = [];
        let allItems;
        if (this.props.deal) {
            const itemsRef = firebase.database().ref(this.props.deal + '-items');
            allItems = fetchItems(itemsRef, arr);
            console.log(allItems);
        }
        else {
            const saleItemsRef = firebase.database().ref('sale-items');
            const rentItemsRef = firebase.database().ref('rent-items');
            allItems = [...fetchItems(saleItemsRef, arr), ...fetchItems(rentItemsRef, arr)];
        }
        allItems ? this.props.itemsLoaded(allItems) : this.props.itemsError();

        //const itemsRef = firebase.database().ref((this.props.deal ? this.props.deal : 'sale') + '-items');
        /* const saleItemsRef = firebase.database().ref('sale-items');
        const rentItemsRef = firebase.database().ref('rent-items');
        saleItemsRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                //const itemList = [];
                for (let id in items) {
                    allItems.push({ id, ...items[id] });
                };
                //this.props.itemsLoaded(allItems);
            }
            else {
                this.props.itemsError();
            }
        });
        rentItemsRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                //const itemList = [];
                for (let id in items) {
                    allItems.push({ id, ...items[id] });
                };
                this.props.itemsLoaded(allItems);
            }
            else {
                this.props.itemsError();
            }
        }); */
    }

    render() {
        const { itemId, items, loading, error } = this.props;

        if (loading) {
            return <Loading />
        }
        if (error) {
            return <Error />
        }

        const item = items.find(el => el.id === itemId);
        const {...itemProps} = item;

        return(
            <div className="container details">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="details-prop-header mb-2">Luxury {item.type} for {this.props.deal}</div>
                        <div className="details-prop-basicdata mb-2">{item.price} &#8364; | {item.surface} m<sup>2</sup> | {item.bedrooms} bedrooms | {item.bathrooms} bathrooms</div>
                        <PropertyCard {...itemProps} slider classnames="detail"/>
                        
                        <div className = "mapouter details" > 
                            <div className = "gmap_canvas" > 
                                <iframe width = "600"
                                    title="maps-instance"
                                    height = "500"
                                    id = "gmap_canvas"
                                    src = {`https://maps.google.com/maps?q=${item.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder = "0"
                                    scrolling = "no"
                                    marginHeight = "0"
                                    marginWidth = "0" > 
                                </iframe><br/>
                            </div>
                        </div>
                    </div>                   
                    <div className="contact-form-details col-12 col-md-3">
                        <h2>{item.title}</h2>
                        <RequestInfo itemId={itemId} formId="request-info"/>
                    </div>
                </div>
            </div>
        )
    }   
}

/* "https://maps.google.com/maps?q=tarragona&t=&z=13&ie=UTF8&iwloc=&output=embed" */

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
    setDeal
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);