import counterStore from "./counterStore";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterStore
})

export default allReducers;