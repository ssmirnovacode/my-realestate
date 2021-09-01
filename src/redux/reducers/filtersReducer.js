export const filtersReducer = (state = {
    apartment: true,
    flat: true,
    house: true,
    duplex: true,
    province: 'all',
    comarca: 'all',
    city: 'all',
    priceFrom: 0,
    priceTo: 100000000,
    sqmFrom: 0,
    sqmTo: 100000,
    bedroomsMin: null,
    bathroomsMin: null
}, action) => {
    switch (action.type) {
        case 'SET_FILTERS':
            return action.payload;
        case 'RESET_PRICE_FILTERS':
            return {
                    ...state,
                    priceFrom: 0,
                    priceTo: 100000000,
                    bedroomsMin: null,
                    bathroomsMin: null
                }               
        default:
            return state;
    }
}