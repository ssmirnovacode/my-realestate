import React from 'react';
import PropertyCard from '../../components/property-card/property-card';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const ItemsView = ({loading=false, error=false, items, grid=null, classnames='', lastItem=10000}) => {

    if (loading) {
        return <Loading />
    }
    else if (error) {
        return <Error />
    }
    else return (
        items.map((item,i) => {
            const {...itemProps} = item;
            if (i <= lastItem) {
                return(
                    <div key={item._id} className={grid}>
                        <PropertyCard {...itemProps} classnames={classnames}/>
                    </div>
                )   
            }
            else return null;
        })
    )
}

export default ItemsView;