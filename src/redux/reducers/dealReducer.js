export const dealReducer = (state = 'sale', action) => {
    switch (action.type) {
        case 'SET_DEAL':
            return action.payload;
            
        default:
            return state;
    }
}