import React, { Component } from 'react';
import './filter-panel.scss';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError, setDeal, setPropTypes} from '../../redux/actions';

class FilterPanel extends Component {

    state = {
        apartment: true,
        flat: true,
        house: true,
        duplex: true,
        province: '',
        comarca: '',
        city: ''
    }
    
    handlePropChange = async (name) => {
        await this.setState((state) => ({
            [name]: !state[name]
        }));
        console.log(this.state);
    }

    handleZoneChange = async (name, value) => {
         await this.setState((state) => ({
            [name]: value
        }));
        console.log(this.state);
    }

    render() {
        return(
            <div className="filter-panel">
    
                <div className="filter-panel property-types mt-3 mb-3">
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" checked={this.state.apartment} name="apartment" 
                            onChange={(e) => this.handlePropChange(e.target.name)} />
                        <label className="form-check-label ml-1" htmlFor="apartment">Studio</label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" checked={this.state.flat} name="flat" 
                        onChange={(e) => this.handlePropChange(e.target.name)}/>
                        <label className="form-check-label ml-1" htmlFor="flat">Flat</label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" checked={this.state.house} name="house" 
                        onChange={(e) => this.handlePropChange(e.target.name)}/>
                        <label className="form-check-label ml-1" htmlFor="house">House</label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" checked={this.state.duplex} name="duplex" 
                        onChange={(e) => this.handlePropChange(e.target.name)}/>
                        <label className="form-check-label ml-1" htmlFor="duplex">Duplex</label>
                    </div>
                </div>
    
                <div className="filter-panel zone mt-2">
                    <select value={this.state.province} className="custom-select mb-2" name="province"
                        onChange={(e) => this.handleZoneChange(e.target.name, e.target.value)}>
                        <option value="0" disabled>Province</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Girona">Girona</option>
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
    setPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);