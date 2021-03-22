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
    const comarcas = getComarcas(items);
    const cities = getCities(items); // fix to "Barcelona" or activeFilters.comarca

//Event handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/search');
        setFilters(filtersObj);
    }

    const handleProvinceChange = (value) => {
        filtersObj.province = value;
        filtersObj.comarca = getComarcas(items, value)[0]; //getComarcas(items)
        handleComarcaChange(filtersObj.comarca);
        //console.log(filtersObj);
        //setFilters(filtersObj);
        //console.log(props.activeFilters);
    }

    const handleComarcaChange = (value) => {
        filtersObj.comarca = value;
        filtersObj.city = getCities(items, value)[0]; //getCities(items)
        handleCityChange(filtersObj.city);
        //console.log(filtersObj);
        //setFilters(filtersObj);
        //console.log(props.activeFilters);
    }

    const handleCityChange = (value) => {
        filtersObj.city = value;
        setFilters(filtersObj);
        console.log(filtersObj);
        //console.log(props.activeFilters);
    }

    
    return(
        <div className="container mt-2 mb-2">
            <h2>Luxury homes for {type}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group mb-3">
                    <select /* value={filtersObj.province}  */className="custom-select mr-1" name="province"
                    onChange={(e) => handleProvinceChange(e.target.value)}>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Girona">Girona</option>
                    </select>
                    <select /* value={filtersObj.comarca}  */className="custom-select mr-1" name="comarca"
                    onChange={(e) => handleComarcaChange(e.target.value)}>
                        {
                            comarcas.map( com => {
                                return(
                                    <option key={com} value={com} >{com}</option>
                                )
                            })
                        }
                        
                    </select>
                    
                    <select /* value={filtersObj.city}  */className="custom-select mr-1" name="city"
                    onChange={(e) => handleCityChange(e.target.value)}>
                        {
                            cities.map( item => {
                                return(
                                    <option key={item} value={item} >{item}</option>
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