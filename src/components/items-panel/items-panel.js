import React, {Component} from 'react';
import './items-panel.scss';
import PropertyCard from '../../components/property-card/property-card';
import RequestService from '../../services/requests';
import {connect} from 'react-redux';
import {itemsLoaded, itemsRequested, itemsError} from '../../redux/actions';
import baseURL from '../../assets/baseURL';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const reqService = new RequestService();

class ItemsPanel extends Component {

    componentDidMount() {
        this.props.itemsRequested();

        reqService.getItems(baseURL + 'sale-items')
        .then(res => this.props.itemsLoaded(res))
        .catch( () => this.props.itemsError());
    }

    render() {

        const classnames = 'horizontal';

        const {items, loading, error} = this.props;
        

        return(
            <div>
                {/* <div className="container">
                        <div className="row"> */}
                        {
                            items.map(item => {
                                const {...itemProps} = item;
                                return(
                                    <div key={item.id} /* className="col-12" */>
                                        <PropertyCard {...itemProps} classnames={classnames}/>
                                    </div>
                                )   
                            })
                        }
                        {/* </div>
                    </div> */}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);