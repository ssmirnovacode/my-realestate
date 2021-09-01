export const dealReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DEAL':
            return action.payload;
            
        default:
            return state;
    }
}