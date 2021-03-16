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

const setPropTypes = (values) => {
    return {
        type: 'SET_PROP_TYPES',
        payload: values
    }
}

export {itemsError, itemsLoaded, itemsRequested, setDeal, setPropTypes };