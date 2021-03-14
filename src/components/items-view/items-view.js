import React from 'react';
import PropertyCard from '../../components/property-card/property-card';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const ItemsView = ({loading, error, items, grid=null, classnames=''}) => {

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
                <div key={item.id} className={grid}>
                    <PropertyCard {...itemProps} classnames={classnames}/>
                </div>
            )   
        })
    )
}

export default ItemsView;