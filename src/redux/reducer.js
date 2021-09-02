import { combineReducers } from "redux";
import { propertiesReducer } from './reducers/propertiesReducer';
import { dealReducer } from './reducers/dealReducer';
import { filtersReducer } from './reducers/filtersReducer';
import { reviewsReducer } from './reducers/reviewsReducer';
import { sortReducer } from './reducers/sortReducer';
import { itemDetailReducer } from "./reducers/itemDetailReducer";

const reducer = combineReducers({
    properties: propertiesReducer,
    deal: dealReducer,
    activeFilters: filtersReducer,
    sortBy: sortReducer,
    reviews: reviewsReducer,
    itemDetail: itemDetailReducer
})
export default reducer;