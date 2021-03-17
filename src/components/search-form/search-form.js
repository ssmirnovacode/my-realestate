import React from 'react';
import './search-form.scss';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal} from '../../redux/actions';
import baseURL from '../../assets/baseURL';

const SearchForm = (props) => {

    const {type, items} = props;

    const {province, comarca, city} = props.activeFilters;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/search');
        // perhaps updating 'filters' in redux store based on form values
    }

    /* const comarcasBarcelona = ['Alto Penedés', 'Anoia', 'Bages', 'Baix Llobregat', 'Barcelonés', 'Bergadá', 
                   'El Maresme', 'Garraf', 'Moyanés', 'Osona', 'Selva', 'Vallés Occidental', 'Vallés Oriental'],
        comarcasTarragona = ['Alto Campo', 'Bajo Campo', 'Bajo Ebro', 'Bajo Penedés', 'Cuenca de Barberá',
                    'Montsiá', 'Priorato', 'Ribera de Ebro', 'Tarragonés', 'Tierra Alta' ],
        comarcasLleida = ['Alto Penedés', 'Anoia', 'Bages'], // maybe just the existing ones in the base ?..
        comarcasGirona = ['Alto Penedés', 'Anoia', 'Bages']; // maybe just the existing ones in the base ?..

    let index = 1;

    const comarcas = null; //to be fetched from server depending on province */

    //console.log(items.filter(item => item.province === province));
    const getComarcas = (arr) => {
        const totalArr = arr.filter(item => item.province === province).map(item => item.comarca);
        //console.log(totalArr);
        let pureArr = [...new Set(totalArr)];
        //console.log(pureArr);
        return pureArr;
    }
    const comarcas = getComarcas(items);
    //console.log(comarcas);

    return(
        <div className="container mt-2 mb-2">
            <h2>Luxury homes for {type}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group mb-3">
                    <select defaultValue="Barcelona" className="custom-select mr-1" name="province">
                        <option value="Barcelona">Barcelona</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Girona">Girona</option>
                    </select>
                    <select className="custom-select mr-1" name="comarca">
                        {
                            comarcas.map( com => {
                                return(
                                    <option key={com} value={com} >{com}</option>
                                )
                            })
                        }
                        
                    </select>
                    <input type="text" className="form-control mr-1" name="city" placeholder="City" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

/* const mapStateToProps = (state) => ({
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
    setDeal
}; */

export default SearchForm;