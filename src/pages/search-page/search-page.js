import React from 'react';
import './search-page.scss';
import ItemsPanel from '../../components/items-panel/items-panel';
import FilterPanel from '../../components/filter-panel/filter-panel';
import {connect} from 'react-redux';
import {filterItems} from '../../services/filterFunctions';
import SortPanel from '../../components/sort-panel/sort-panel';

const SearchPage = (props) => {

    const {deal, items} = props;
    const {province, comarca, city} = props.activeFilters;

    const filteredItems = filterItems(items, props.activeFilters);
    //const itemsToRender = sortFunc(filteredItems, sortType);

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
                    <SortPanel filteredItems={filteredItems} />

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