export const reviewsRequested = () => {
    return {
        type: 'REVIEWS_REQUESTED'
    }
};

export const reviewsLoaded = (data) => {
    return {
        type: 'REVIEWS_LOADED',
        payload: data
    }
};

export const reviewsError = () => {
    return {
        type: 'REVIEWS_ERROR'
    }
}