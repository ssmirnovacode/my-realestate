import React from 'react';
import './sort-panel.scss';
import {connect} from 'react-redux';
import {setFilters, setSortType} from '../../redux/actions';

const SortPanel = (props) => {

    const handleSort = (e) => {
        setSortType(e.target.value);
    }

    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect019">Order by: </label>
            </div>
            <select value={props.sortBy} className="custom-select" id="inputGroupSelect01"
                onChange={(e) => handleSort(e)}>
                <option value="newest">Newest</option>
                <option value="lowest price">Lowest price</option>
                <option value="highest price">Highest price</option>
                <option value="most sqm">Most sqm</option>
                <option value="least sqm">Least sqm</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({
    /* items: state.items,
    loading: state.loading,
    error: state.error,
    deal: state.deal,
    activeFilters: state.activeFilters, */
    sortBy: state.sortBy
});

const mapDispatchToProps = {
    /* itemsLoaded,
    itemsRequested,
    itemsError, 
    setDeal, */
    setFilters,
    setSortType
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);