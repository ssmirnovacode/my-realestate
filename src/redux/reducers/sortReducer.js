export const sortReducer = (state = 'newest', action) => {
    switch (action.type) {
        case 'SET_SORT_TYPE':
            return action.payload;
            
        default:
            return state;
    }
}