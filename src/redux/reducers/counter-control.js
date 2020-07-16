const counterController = (state = 1, action) => {
    switch(action.type){
        case "ADD_COUNTER":
            return state + 1;
        case "REMOVE_COUNTER":
            return state - 1;
        default:
            return state;
    }
}

export default counterController