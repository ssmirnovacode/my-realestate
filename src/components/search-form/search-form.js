import React from 'react';
import './search-form.scss';

const SearchForm = (props) => {

    const {type} = props;

    const comarcasBarcelona = ['Alto Penedés', 'Anoia', 'Bages', 'Baix Llobregat', 'Barcelonés', 'Bergadá', 
                   'El Maresme', 'Garraf', 'Moyanés', 'Osona', 'Selva', 'Vallés Occidental', 'Vallés Oriental'],
        comarcasTarragona = ['Alto Campo', 'Bajo Campo', 'Bajo Ebro', 'Bajo Penedés', 'Cuenca de Barberá',
                    'Montsiá', 'Priorato', 'Ribera de Ebro', 'Tarragonés', 'Tierra Alta' ],
        comarcasLleida = ['Alto Penedés', 'Anoia', 'Bages'], // maybe just the existing ones in the base ?..
        comarcasGirona = ['Alto Penedés', 'Anoia', 'Bages']; // maybe just the existing ones in the base ?..

    let index = 1;

    const comarca = () => {
        switch (document.getElementById('selectProvince').value) {
            case 1:
                return (
                    <>
                    {
                        comarcasBarcelona.map(item => {
                            index++;
                            return(
                                <option value={index}>{item}</option>
                            )
                        })
                    }
                    </>
                );
            case 2:
                return (
                    <>
                    {
                        comarcasTarragona.map(item => {
                            index++;
                            return(
                                <option value={index}>{item}</option>
                            )
                        })
                    }
                    </>
                );
            case 3:
                return (
                    <>
                    {
                        comarcasLleida.map(item => {
                            index++;
                            return(
                                <option value={index}>{item}</option>
                            )
                        })
                    }
                    </>
                );
            case 4:
                return (
                    <>
                    {
                        comarcasGirona.map(item => {
                            index++;
                            return(
                                <option value={index}>{item}</option>
                            )
                        })
                    }
                    </>
                );
            default:
                return null;
        }
    }

    return(
        <div className="container mt-2 mb-2">
            <h2>Luxury homes for {type}</h2>
            <form>
                <div className="input-group mb-3">
                    <select className="custom-select mr-1" id="selectProvince">
                        <option value="0" selected disabled>Province</option>
                        <option value="1">Barcelona</option>
                        <option value="2">Tarragona</option>
                        <option value="3">Lleida</option>
                        <option value="4">Girona</option>
                    </select>
                    <select className="custom-select mr-1" id="selectComarca">
                        <option value="0" selected disabled>Area/Comarca</option>
                        {comarca}
                        
                    </select>
                    <input type="text" className="form-control mr-1" name="city" placeholder="City" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;