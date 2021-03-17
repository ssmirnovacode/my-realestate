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

const filteredItemsLoaded = (items) => {
    return {
        type: 'FILTERED_ITEMS_LOADED',
        payload: items
    };
};


export {itemsError, itemsLoaded, itemsRequested, setDeal, setFilters, filteredItemsLoaded };