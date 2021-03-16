import React, {Component} from 'react';
import './search-page.scss';
import ItemsPanel from '../../components/items-panel/items-panel';
import FilterPanel from '../../components/filter-panel/filter-panel';

class SearchPage extends Component {

    render() {;
        //variables to be passed as props:
        // deal type
        // Province - ideally - the most accurate filter value (if no city - comarca, if no comarca - province)
        // number of options found
        return(
            <div className="container search-page">
                
                    <h2>Homes for -sale- in -Blabla-</h2>
                    <div className="search-page_subheader"> -N- options found </div>
                
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

                        <ItemsPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;