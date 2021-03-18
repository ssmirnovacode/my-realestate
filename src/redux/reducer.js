const initialState = {
    loading: true,
    error: false,
    items: [],
    filteredItems: [],
    deal: '',
    activeFilters: {
        /* type: [], */
        apartment: true,
        flat: true,
        house: true,
        duplex: true,
        province: 'Barcelona',
        comarca: 'Barcelonés',
        city: 'Barcelona',
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
        case 'FILTERED_ITEMS_LOADED':
            return {
                ...state,
                loading: false,
                filteredItems: action.payload
            }
        default:
            return state;
        }   
}

export default reducer;