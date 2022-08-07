import { applyMiddleware, combineReducers, createStore } from "redux";

import authReducer from "./reducers/auth.reducer";
import cartReducer from "./reducers/cart.reducer";
import categoryReducer from "./reducers/category.reducer";
import orderReducer from "./reducers/order.reducer";
import placesReducer from "./reducers/places.reducer";
import productsReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
    places: placesReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));