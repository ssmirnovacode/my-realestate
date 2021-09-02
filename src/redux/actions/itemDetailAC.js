export const itemLoaded = (item) => {
    return {
        type: 'ITEM_LOADED',
        payload: item
    };
};

export const itemRequested = () => {
    return {
        type: 'ITEM_REQUESTED'
    };
};

export const itemError = () => {
    return {
        type: 'ITEM_ERROR'
    };
};