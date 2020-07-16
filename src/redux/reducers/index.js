import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import counterController from "./counter-control";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    counterController
})

export default allReducers;