import React from 'react';
import './search-page.scss';
import ItemsPanel from '../../components/items-panel/items-panel';
import FilterPanel from '../../components/filter-panel/filter-panel';
import {connect} from 'react-redux';

const SearchPage = (props) => {

    const {deal, items} = props;
    const {province, comarca, city} = props.activeFilters;

    //to be oursourced?
    const filterItems = (items, filters) => {
        return items.filter(item => (filters.apartment === true && item.type === 'apartment') || 
                            (filters.flat === true && item.type === 'flat') || (filters.house === true && item.type === 'house')
                            || (filters.duplex === true && item.type === 'duplex') )
            .filter(item => item.province === filters.province)
            .filter(item => item.comarca === filters.comarca )
            .filter(item => item.city === filters.city);
    };

    const filteredItems = filterItems(items, props.activeFilters);

    const count = filteredItems.length;

    return(
        <div className="container search-page">
            
                <h2>Homes for {deal} in {city}, {comarca} ({province}) </h2>
                <div className="search-page_subheader"> {count} options found </div>
            
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    
                    <FilterPanel />
                </div>
                <div className="col-sm-12 col-md-10">
                    <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect019">Order by: </label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option value="0">Newest</option>
                                <option value="1">Lowest price</option>
                                <option value="2">Highest price</option>
                                <option value="3">Most sqm</option>
                                <option value="3">Least sqm</option>
                            </select>
                    </div>

                    <ItemsPanel filteredItems={filteredItems}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    deal: state.deal,
    items: state.items,
    activeFilters: state.activeFilters
});

export default connect(mapStateToProps/* , mapDispatchToProps */)(SearchPage);