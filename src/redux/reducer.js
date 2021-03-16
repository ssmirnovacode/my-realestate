const initialState = {
    loading: true,
    error: false,
    items: [],
    deal: '',
    activeFilters: {
        type: [],
        province: '',
        comarca: '',
        city: '',
        bedrooms: null,
        bathrooms: null,
        surface: null
    }
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
        case 'SET_PROP_TYPES':

            return {
                ...state,
                activeFilters: {
                    ...state.activeFilters,
                    type: [...action.payload, ...state.activeFilters.type]
                }
            }
        default:
            return state;
        }   
}

export default reducer;