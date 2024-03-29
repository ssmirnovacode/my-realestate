import React from 'react';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError } from '../../redux/actions/itemsAC';
import { setDeal, setFilters } from '../../redux/actions/filtersAC';
import {getCities, getComarcas} from '../../utils/filterFunctions';
import { provinces } from '../../utils/filterArrays';
import basePath from '../../assets/basePath';

const SearchForm = (props) => {
    
    const {type, items, setFilters} = props;
    
    const {province, comarca, city} = props.activeFilters;

    let filtersObj = {...props.activeFilters};
    
    const comarcas = getComarcas(items, province); 
    const cities = getCities(items, comarca); 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`${basePath}/search`);
        setFilters(filtersObj);
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
    }

    return(
        <div className="container mt-2 mb-2">
            <h2>Luxury homes for {type}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row input-group mb-3">
                    <div className="col-12 col-md-3 mb-2">
                    <select value={province} className="custom-select" name="province"
                    onChange={(e) => handleProvinceChange(e.target.value)}>
                        <option value='all'>All</option>
                        {
                            provinces.map((p,i) => {
                                return(
                                    <option key={p+i} value={p}>{p}</option>
                                )
                            })
                        }
                    </select>
                    </div>
                    
                    <div className="col-12 col-md-3 mb-2">
                    <select value={comarca} className="custom-select" name="comarca"
                    onChange={(e) => handleComarcaChange(e.target.value)}>
                        <option value='all' >All</option>
                        {
                            comarcas.map( com => {
                                return(
                                    <option key={com} value={com} >{com}</option>
                                )
                            })
                        }
                        
                    </select>
                    </div>
                    
                    <div className="col-12 col-md-3 mb-2">
                    <select value={city} className="custom-select" name="city"
                    onChange={(e) => handleCityChange(e.target.value)}>
                        <option value='all' >All</option>
                        {
                            cities.map( item => {
                                return(
                                    <option key={item} value={item} >{item}</option>
                                )
                            })
                        }
                        
                    </select>  
                    </div>
                    <div className="col-12 col-md-1"><button type="submit" className="btn btn-primary">Submit</button></div>
                    
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.properties.items,
    loading: state.properties.loading,
    error: state.properties.error,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);