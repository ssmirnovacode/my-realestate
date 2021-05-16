import React, {useState} from 'react';
import './filter-panel.scss';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal, setFilters} from '../../redux/actions';
import {getCities, getComarcas} from '../../services/filterFunctions';
import {bedroomBtns, bathroomBtns, sqmSortOptionsFrom, sqmSortOptionsTo} from '../../assets/filterArrays';

const FilterPanel = (props) => {
 
    const [chosenBedOption, setChosenBedOption] = useState(0);
    const [chosenBathOption, setChosenBathOption] = useState(1);

    const {items, setFilters, deal} = props;  //find a way to keep rendering on refresh

    const {apartment, flat, house, duplex, province, comarca, city, priceFrom, priceTo, sqmFrom, sqmTo} = props.activeFilters;

    let filtersObj = {...props.activeFilters};

    const priceRangeByDealFrom = deal === 'sale' ? <>
                                                <option value="0">From</option>
                                                <option value="50000">From 50 000</option>
                                                <option value="100000">From 100 000</option>
                                                <option value="150000">From 150 000</option>
                                                <option value="200000">From 200 000</option>
                                                <option value="300000">From 300 000</option>
                                                <option value="500000">From 500 000</option>
                                            </> :
                                                <>
                                                <option value="0" >From</option>
                                                <option value="500">From 500</option>
                                                <option value="1000">From 1000</option>
                                                <option value="1500">From 1500</option>
                                                <option value="2000">From 2000</option>
                                                <option value="3000">From 3000</option>
                                            </> ;

    const priceRangeByDealTo = deal === 'sale' ? <>
                                                <option value="100000000">To</option>
                                                <option value="50000">To 50 000</option>
                                                <option value="100000">To 100 000</option>
                                                <option value="150000">To 150 000</option>
                                                <option value="200000">To 200 000</option>
                                                <option value="300000">To 300 000</option>
                                                <option value="500000">To 500 000</option>
                                                <option value="1000000">To 1 000 000</option>
                                                <option value="5000000">To 5 000 000</option>
                                            </> :
                                            <>
                                                <option value="10000000" >To</option>
                                                <option value="500">To 500</option>
                                                <option value="1000">To 1000</option>
                                                <option value="1500">From 1500</option>
                                                <option value="2000">From 2000</option>
                                                <option value="3000">From 3000</option>
                                                <option value="5000">From 5000</option>
                                            </> ;

    const comarcas = getComarcas(items, province); //add 2nd parameter if outsourced
    const cities = getCities(items, comarca);
    
    const handlePropChange = (name) => {
        filtersObj[name]= !filtersObj[name];
        //console.log(filtersObj);
        props.setFilters(filtersObj);
        //console.log(props.activeFilters);
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

    const handlePriceRangeChange = (e) => {
        if (e.target.name === 'priceFrom') {
            filtersObj.priceFrom = e.target.value;        
        }
        else {
            filtersObj.priceTo = e.target.value;
        }
        setFilters(filtersObj);
        //console.log(filtersObj);
    }   

    const handleSqmRangeChange = (e) => {
        if (e.target.name === 'sqmFrom') {
            filtersObj.sqmFrom = e.target.value;        
        }
        else {
            filtersObj.sqmTo = e.target.value;
        }
        setFilters(filtersObj);
    }  

    const handleBrMin = (e, type) => {
        filtersObj[type] = e.target.id.slice(-1);
        setFilters(filtersObj);
        type === 'bedroomsMin' ? setChosenBedOption(e.target.id.slice(-1)) : setChosenBathOption(e.target.id.slice(-1));      
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
                <select value={priceFrom} className="custom-select mb-2" name="priceFrom"
                    onChange={(e) => handlePriceRangeChange(e)}>
                    {priceRangeByDealFrom}
                </select>
                <select value={priceTo} className="custom-select mb-2" name="priceTo"
                 onChange={(e) => handlePriceRangeChange(e)}>
                    {priceRangeByDealTo}
                </select>
            </div>

            <div className="filter-panel bed mt-3">
                <div className="filter-panel bed header mt-3 mb-2">Bedrooms</div>
                {
                    bedroomBtns.map(item => {
                        return(
                            <div key={item.id} className={chosenBedOption === item.id.slice(-1) ? item.classes + ' chosen' : item.classes} id={item.id} onClick={(e) => handleBrMin(e, 'bedroomsMin')}>{item.label}</div>
                        )
                    })
                }
            </div>

            <div className="filter-panel bath mt-3">
                <div className="filter-panel bath header mt-3 mb-2">Bathrooms</div>
                {
                    bathroomBtns.map(item => {
                        return(
                            <div key={item.id} className={chosenBathOption === item.id.slice(-1) ? item.classes + ' chosen' : item.classes} id={item.id} onClick={(e) => handleBrMin(e, 'bathroomsMin')}>{item.label}</div>
                        )
                    })
                }
            </div>

            <div className="filter-panel surface-range mt-3">
                <div className="filter-panel surface-range-header mb-2">Surface</div>
                <select value={sqmFrom} className="custom-select mb-2" name="sqmFrom"
                    onChange={(e) => handleSqmRangeChange(e)}>
                        {
                            sqmSortOptionsFrom.map(opt => {
                                return(
                                    <option key={`sqmSortOptionsFrom${opt.value}`} value={opt.value} >{opt.label}</option>
                                )
                            })
                        }
                </select>
                <select value={sqmTo} className="custom-select mb-2" name="sqmTo"
                    onChange={(e) => handleSqmRangeChange(e)}>
                    {
                            sqmSortOptionsTo.map(opt => {
                                return(
                                    <option key={`sqmSortOptionsTo${opt.value}`} value={opt.value} >{opt.label}</option>
                                )
                            })
                        }
                </select>
            </div>

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