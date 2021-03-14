import React, {Component} from 'react';
import './search-page.scss';
import ItemsPanel from '../../components/items-panel/items-panel';

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
                        <div>filter panel</div>
                        {/* <FilterPanel /> */}
                    </div>
                    <div className="col-sm-12 col-md-10">
                        <ItemsPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;