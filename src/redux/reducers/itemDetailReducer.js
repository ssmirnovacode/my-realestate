export const itemDetailReducer = (state = {
    item: null,
    loading: true,
    error: false
}, action) => {
    switch (action.type) {
        case 'ITEM_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'ITEM_LOADED':
            return {
                ...state,
                loading: false,
                item: action.payload
            };
        case 'ITEM_ERROR':
            return {
                    ...state,
                    loading: false,
                    error: true
                };
        default:
            return state;
    }
}