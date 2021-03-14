const initialState = {
    loading: true,
    error: false,
    items: [],
    deal: ''
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ITEMS_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'ITEMS_LOADED':
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case 'ITEMS_ERROR':
            return {
                    ...state,
                    loading: false,
                    error: true
                };
        case 'SET_DEAL':
            return {
                ...state,
                deal: action.payload
            };
        default:
            return state;
        }   
}

export default reducer;