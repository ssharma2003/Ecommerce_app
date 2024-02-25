import reducers from "../reducers/Reducers";
import { reducers2 } from "../reducers/Reducers2";
import { createStore, combineReducers } from "redux";

const routeReducer = combineReducers({reducers, reducers2});
export const store = createStore(routeReducer);
