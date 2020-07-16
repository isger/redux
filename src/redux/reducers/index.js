import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import counterArray from "./counter-array";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    counterArray
})

export default allReducers;