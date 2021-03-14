import React from 'react';
import './search-form.scss';

const SearchForm = (props) => {

    const {type} = props;

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

    return(
        <div className="container mt-2 mb-2">
            <h2>Luxury homes for {type}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group mb-3">
                    <select defaultValue="0" className="custom-select mr-1" id="selectProvince">
                        <option value="0" disabled>Province</option>
                        <option value="1">Barcelona</option>
                        <option value="2">Tarragona</option>
                        <option value="3">Lleida</option>
                        <option value="4">Girona</option>
                    </select>
                    <select defaultValue="0" className="custom-select mr-1" id="selectComarca">
                        <option value="0" disabled>Area/Comarca</option>
                        {/* {comarca} */}
                        
                    </select>
                    <input type="text" className="form-control mr-1" name="city" placeholder="City" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;