export const reviewsReducer = (state = {
                                        loading: true,
                                        error: false,
                                        reviews: [],
                                    }, action) => {
        switch (action.type) {
            case 'REVIEWS_REQUESTED':
                return {
                    ...state,
                    loading: true
                }
            case 'REVIEWS_LOADED':
                return {
                    ...state,
                    loading: false,
                    items: action.payload
                };
            case 'REVIEWS_ERROR':
                return {
                    ...state,
                    loading: false,
                    error: true
                };
            default:
                return state;
        }
}