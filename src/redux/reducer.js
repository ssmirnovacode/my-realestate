const initialState = {
    loading: true,
    error: false,
    items: [],
    deal: '',
    activeFilters: {
        /* type: [], */
        apartment: true,
        flat: true,
        house: true,
        duplex: true,
        province: 'all',
        comarca: 'all',
        city: 'all',
        priceFrom: 0,
        priceTo: 100000000,
        bedroomsMin: null,
        bathroomsMax: null,
        surfaceMin: null,
        surfaceMax: null
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
        case 'SET_FILTERS':

            return {
                ...state,
                activeFilters: action.payload
            };
        default:
            return state;
        }   
}

export default reducer;