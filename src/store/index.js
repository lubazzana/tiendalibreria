import { combineReducers, createStore } from "redux";

import categoryReducer from "./reducers/category.reducer";
import productsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
})

export default createStore(RootReducer);