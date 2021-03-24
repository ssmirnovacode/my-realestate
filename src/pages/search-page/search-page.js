import React from 'react';
import './search-page.scss';
import ItemsPanel from '../../components/items-panel/items-panel';
import FilterPanel from '../../components/filter-panel/filter-panel';
import {connect} from 'react-redux';
import filterItems from '../../services/filterItems';

const SearchPage = (props) => {

    const {deal, items} = props;
    const {province, comarca, city} = props.activeFilters;

    const filteredItems = filterItems(items, props.activeFilters);

    const count = filteredItems.length;

    const citySelected = city === 'all' ? null : `${city},`;
    const comarcaSelected = comarca === 'all' ? null : comarca;
    const provinceSelected = province === 'all' ? 'Catalonia' : province.toUpperCase();

    return(
        <div className="container search-page">
            
                <h2>Homes for {deal} in {citySelected} {comarcaSelected} {provinceSelected} </h2>
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
                                <option value="Newest">Newest</option>
                                <option value="Lowest price">Lowest price</option>
                                <option value="Highest price">Highest price</option>
                                <option value="Most sqm">Most sqm</option>
                                <option value="Least sqm">Least sqm</option>
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