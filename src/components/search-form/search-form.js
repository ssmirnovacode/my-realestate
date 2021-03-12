import React from 'react';
import './search-form.scss';

const SearchForm = (props) => {

    const {type} = props;

    const comarcasBarcelona = ['Alto Penedés', 'Anoia', 'Bages'],
        comarcasTarragona = ['Alto Penedés', 'Anoia', 'Bages'], // fill in
        comarcasLleida = ['Alto Penedés', 'Anoia', 'Bages'], // fill in
        comarcasGirona = ['Alto Penedés', 'Anoia', 'Bages']; // fill in

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
                    {/* <option value="1">Alto Penedés</option>
                    <option value="2">Anoia</option>
                    <option value="3">Bages</option>
                    <option value="4">Baix Llobregat</option>
                    <option value="5">Barcelonés</option>
                    <option value="6">Bergadá</option>
                    <option value="7">El Maresme</option>
                    <option value="8">Garraf</option>
                    <option value="9">Moyanés</option>
                    <option value="10">Osona</option>
                    <option value="11">Selva</option>
                    <option value="12">Vallés Occidental</option>
                    <option value="13">Vallés Oriental</option> */}
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
                    {/* <option value="1">Alto Campo</option>
                    <option value="2">Bajo Campo</option>
                    <option value="3">Bajo Ebro</option>
                    <option value="4">Bajo Penedés</option>
                    <option value="5">Cuenca de Barberá</option>
                    <option value="6">Montsiá</option>
                    <option value="7">Priorato</option>
                    <option value="8">Ribera de Ebro</option>
                    <option value="9">Tarragonés</option>
                    <option value="10">Tierra Alta</option> */}
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