const itemsLoaded = (items) => {
    return {
        type: 'ITEMS_LOADED',
        payload: items
    };
};

const itemsRequested = () => {
    return {
        type: 'ITEMS_REQUESTED'
    };
};

const itemsError = () => {
    return {
        type: 'ITEMS_ERROR'
    };
};

const setDeal = (dealType) => {
    return {
        type: 'SET_DEAL',
        payload: dealType
    };
}

const setFilters = (filtersObj) => {
    return {
        type: 'SET_FILTERS',
        payload: filtersObj
    }
}

const resetPriceFilters = () => {
    return {
        type: 'RESET_PRICE_FILTERS'
    }
}


export {itemsError, itemsLoaded, itemsRequested, setDeal, setFilters, resetPriceFilters};