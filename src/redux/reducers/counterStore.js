const counterStore = (state = [], action) => {

    let index = action.payload.index;

    switch(action.type){
        case "ADD_COUNTER":
            return state.concat({counter : 0})
        case "REMOVE_COUNTER":
            return state.pop();
        case "INCREMENT":
            return state[index].counter + 1;
        case "DECREMENT":
            return state[index].counter - 1;
        default:
            return state;
    }

}

export default counterStore