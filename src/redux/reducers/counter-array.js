const counterArray = (state = [], action) => {
    switch(action.type){
        case "ADD_COUNTER_OBJECT":
            return state.concat({counter : 1});
        case "REMOVE_COUNTER_OBJECT":
            return state.pop();
        default:
            return state;
    }
}

export default counterArray