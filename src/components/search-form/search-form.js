import React from 'react';
import './search-form.scss';
//import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal, setFilters} from '../../redux/actions';
//import baseURL from '../../assets/baseURL';

const SearchForm = (props) => {

    const {type, items, setFilters} = props;

    const {province, comarca, city} = props.activeFilters;

    let filtersObj = {...props.activeFilters};
    //console.log(filtersObj);

    //the following functions to be outsourced into a separate file
    const getComarcas = (arr) => {
        const totalArr = arr.filter(item => item.province === province).map(item => item.comarca);
        let pureArr = [...new Set(totalArr)];
        return pureArr;
    }

    const getCities = (arr) => {
        const totalArr = arr.filter(item => item.comarca === comarca).map(item => item.city);
        let pureArr = [...new Set(totalArr)];
        return pureArr;
    }
    const comarcas = getComarcas(items);
    const cities = getCities(items);

//Event handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/search');
        setFilters(filtersObj);
    }

    const handleProvinceChange = (name, value) => {
        filtersObj[name] = value;
        filtersObj.comarca = handleComarcaChange(comarca, getComarcas(items)[0])
        console.log(filtersObj);
        setFilters(filtersObj);
        console.log(props.activeFilters);
    }

    const handleComarcaChange = (name, value) => {
        filtersObj[name] = value;
        filtersObj.city = handleCityChange(city, getCities(items)[0]);
        console.log(filtersObj);
        setFilters(filtersObj);
        console.log(props.activeFilters);
    }

    const handleCityChange = (name, value) => {
        filtersObj[name] = value;
        setFilters(filtersObj);
        console.log(props.activeFilters);
    }

    
    return(
        <div className="container mt-2 mb-2">
            <h2>Luxury homes for {type}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group mb-3">
                    <select className="custom-select mr-1" name="province"
                    onChange={(e) => handleProvinceChange(e.target.name, e.target.value)}>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Girona">Girona</option>
                    </select>
                    <select className="custom-select mr-1" name="comarca"
                    onChange={(e) => handleComarcaChange(e.target.name, e.target.value)}>
                        {
                            comarcas.map( com => {
                                return(
                                    <option key={com} value={com} >{com}</option>
                                )
                            })
                        }
                        
                    </select>
                    {/* <input type="text" className="form-control mr-1" name="city" placeholder="City" /> */}
                    <select className="custom-select mr-1" name="city"
                    onChange={(e) => handleCityChange(e.target.name, e.target.value)}>
                        {
                            cities.map( city => {
                                return(
                                    <option key={city} value={city} >{city}</option>
                                )
                            })
                        }
                        
                    </select>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);