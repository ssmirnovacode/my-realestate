import React from 'react';
import './sort-panel.scss';
import {connect} from 'react-redux';
import {setFilters} from '../../redux/actions';

const SortPanel = (props) => {

    const handlePriceSort = () => {
        
    }

    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect019">Order by: </label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
                <option value="Newest">Newest</option>
                <option value="Lowest price">Lowest price</option>
                <option value="Highest price">Highest price</option>
                <option value="Most sqm">Most sqm</option>
                <option value="Least sqm">Least sqm</option>
            </select>
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
    /* itemsLoaded,
    itemsRequested,
    itemsError, 
    setDeal, */
    setFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);