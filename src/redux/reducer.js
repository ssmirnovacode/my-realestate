const initialState = {
    loading: true,
    error: false,
    items: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ITEMS_LOADED':
        return{

        };
    default:
        return state;
    }   
}

export default reducer;