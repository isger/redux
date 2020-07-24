const counterStore = (state = [], action) => {

    switch(action.type){
        case "ADD_COUNTER":
            return state.concat({counter : 0})
        case "REMOVE_COUNTER":
            return state.pop();
        case "INCREMENT":
            return state[action.payload.index].counter + 1;
        case "DECREMENT":
            return state[action.payload.index].counter - 1;
        default:
            return state;
    }

}

export default counterStore