import React from 'react';
import PropertyCard from '../../components/property-card/property-card';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const ItemsView = ({loading, error, items}) => {
    if (loading) {
        return <Loading />
    }
    else if (error) {
        return <Error />
    }
    else return (
        items.map(item => {
            const {...itemProps} = item;
            return(
                <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <PropertyCard {...itemProps} />
                </div>
            )   
        })
    )
}

export default ItemsView;