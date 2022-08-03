import { applyMiddleware, combineReducers, createStore } from "redux";

import categoryReducer from "./reducers/category.reducer";
import productsReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));