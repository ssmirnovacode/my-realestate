

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

const setSortType = (sortType) => {
    return {
        type: 'SET_SORT_TYPE',
        payload: sortType
    }
}




export {setDeal, setFilters, resetPriceFilters, setSortType};