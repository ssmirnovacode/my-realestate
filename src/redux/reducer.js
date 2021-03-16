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
        province: 'Tarragona',
        comarca: '',
        city: '',
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
                activeFilters: action.payload/* {
                    ...state.activeFilters,
                    type: [...action.payload, ...state.activeFilters.type]
                } */
            }
        default:
            return state;
        }   
}

export default reducer;