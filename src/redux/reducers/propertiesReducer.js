export const propertiesReducer = (state = {
                                        loading: true,
                                        error: false,
                                        items: [],
                                    }, action) => {
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
            default:
                return state;
        }
}