import { combineReducers } from "redux";
import { categoryReducer } from "./category.reducer";
import { pizzaReducer } from "./pizza.reducer";

export const rootReducer = combineReducers({
    category : categoryReducer,
    pizza : pizzaReducer
})