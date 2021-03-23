import React from 'react';
import './filter-panel.scss';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal, setFilters} from '../../redux/actions';

const FilterPanel = (props) => {

    //console.log(props.activeFilters);
    const {items, setFilters} = props;  //find a way to keep rendering on refresh

    const {apartment, flat, house, duplex, province, comarca, city} = props.activeFilters;

    let filtersObj = {...props.activeFilters};

    //the following functions to be outsourced into a separate file
    const getComarcas = (arr, prov=province) => {
        const totalArr = arr.filter(item => item.province === prov).map(item => item.comarca);
        let pureArr = [...new Set(totalArr)];
        return pureArr;
    }

    const getCities = (arr, com=comarca) => {
        const totalArr = arr.filter(item => item.comarca === com).map(item => item.city);
        let pureArr = [...new Set(totalArr)];
        return pureArr;
    }
    const comarcas = getComarcas(items); //add 2nd parameter if outsourced
    const cities = getCities(items); //add 2nd parameter if outsourced
    
    const handlePropChange = (name) => {
        filtersObj[name]= !filtersObj[name];
        console.log(filtersObj);
        props.setFilters(filtersObj);
        console.log(props.activeFilters);
    }

    const handleProvinceChange = (value) => {
        filtersObj.province = value;
        filtersObj.comarca = 'all'; 
        filtersObj.city = 'all';
        setFilters(filtersObj);
    }

    const handleComarcaChange = (value) => {
        filtersObj.comarca = value;
        filtersObj.city = 'all';
        setFilters(filtersObj);
    }

    const handleCityChange = (value) => {
        filtersObj.city = value;
        setFilters(filtersObj);
        //console.log(filtersObj);
    }

    return(
        <div className="filter-panel">

            <div className="filter-panel property-types mt-3 mb-3">
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" checked={apartment} name="apartment" 
                        onChange={(e) => handlePropChange(e.target.name)} />
                    <label className="form-check-label ml-1" htmlFor="apartment">Studio</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" checked={flat} name="flat" 
                    onChange={(e) => handlePropChange(e.target.name)}/>
                    <label className="form-check-label ml-1" htmlFor="flat">Flat</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" checked={house} name="house" 
                    onChange={(e) => handlePropChange(e.target.name)}/>
                    <label className="form-check-label ml-1" htmlFor="house">House</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" checked={duplex} name="duplex" 
                    onChange={(e) => handlePropChange(e.target.name)}/>
                    <label className="form-check-label ml-1" htmlFor="duplex">Duplex</label>
                </div>
            </div>

            <div className="filter-panel zone mt-2">
                <select value={province} className="custom-select mb-2" name="province"
                    onChange={(e) => handleProvinceChange(e.target.value)}>
                    <option value='all'>All</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Tarragona">Tarragona</option>
                    <option value="Lleida">Lleida</option>
                    <option value="Girona">Girona</option>
                </select>
                <select value={comarca} className="custom-select mb-2" name="comarca"
                    onChange={(e) => handleComarcaChange(e.target.value)}>
                        <option value='all'>All</option>
                    {
                            comarcas.map( com => {
                                return(
                                    <option key={com} value={com} >{com}</option>
                                )
                            })
                        }
                </select>
                <select value={city} className="custom-select mb-2" name="city"
                    onChange={(e) => handleCityChange(e.target.value)}>
                        <option value='all'>All</option>
                    {
                            cities.map( item => {
                                return(
                                    <option key={item} value={item} >{item}</option>
                                )
                            })
                        }
                </select>
                
            </div>

            <div className="filter-panel price-range mt-3">
                <div className="filter-panel price-range-header mb-2">Price</div>
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect0121">
                    <option value="0" disabled>From</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect0132">
                    <option value="0" disabled>To</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="filter-panel bed mt-3">
                <div className="filter-panel bed header mt-3 mb-2">Bedrooms</div>
                <div className="filter-panel bed qty">0+</div>
                <div className="filter-panel bed qty">1+</div>
                <div className="filter-panel bed qty">2+</div>
                <div className="filter-panel bed qty">3+</div>
                <div className="filter-panel bed qty">4+</div>
            </div>

            <div className="filter-panel bath mt-3">
                <div className="filter-panel bath header mt-3 mb-2">Bathrooms</div>
                <div className="filter-panel bath qty">1+</div>
                <div className="filter-panel bath qty">2+</div>
                <div className="filter-panel bath qty">3+</div>
            </div>

            <div className="filter-panel surface-range mt-3">
                <div className="filter-panel surface-range-header mb-2">Surface</div>
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect01211">
                    <option value="0" disabled>From</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect01322">
                    <option value="0" disabled>To</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            {/* to be used when the db is further suctomised */}

            {/* <div className="filter-panel extras mt-3 mb-3">
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" value="" name="pool" />
                    <label className="form-check-label ml-1" htmlFor="pool">Swimming-pool</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" value="" name="terrace" />
                    <label className="form-check-label ml-1" htmlFor="terrace">Terrace</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" value="" name="lift" />
                    <label className="form-check-label ml-1" htmlFor="lift">Lift</label>
                </div>
                <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" value="" name="parking" />
                    <label className="form-check-label ml-1" htmlFor="parking">Parking</label>
                </div>
            </div> */}

        </div>
    )

    
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
    setFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);