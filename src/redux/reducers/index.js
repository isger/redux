import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import counterStore from "./counterStore";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    counterStore
})

export default allReducers;