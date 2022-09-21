import {  createStore , applyMiddleware} from "redux";
import { rootReducer } from "./reducer/rootReducer";
import thunk from "redux-thunk";

export const configStore = () => {
    let store = createStore(rootReducer,applyMiddleware(thunk))
    return store;
}