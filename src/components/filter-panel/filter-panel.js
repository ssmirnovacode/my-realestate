import React from 'react';
import './filter-panel.scss';

const FilterPanel = (props) => {

    return(
        <div className="filter-panel">

            <div className="filter-panel property-types mt-3 mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="apartment" />
                    <label className="form-check-label ml-1" htmlFor="apartment">Studio</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="flat" />
                    <label className="form-check-label ml-1" htmlFor="flat">Flat</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="house" />
                    <label className="form-check-label ml-1" htmlFor="house">House</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="duplex" />
                    <label className="form-check-label ml-1" htmlFor="duplex">Duplex</label>
                </div>
            </div>

            <div className="filter-panel zone mt-2">
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect011">
                    <option value="0" disabled>Province</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect012">
                    <option value="0" disabled>Area/Comarca</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select defaultValue="0" className="custom-select mb-2" id="inputGroupSelect013">
                    <option value="0" disabled>City/Municipio</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
        </div>
    )
}

export default FilterPanel;