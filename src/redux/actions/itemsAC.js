export const itemsLoaded = (items) => {
    return {
        type: 'ITEMS_LOADED',
        payload: items
    };
};

export const itemsRequested = () => {
    return {
        type: 'ITEMS_REQUESTED'
    };
};

export const itemsError = () => {
    return {
        type: 'ITEMS_ERROR'
    };
};