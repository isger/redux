const counterStore = (state = [], action) => {

    console.log(action.payload);

    switch(action.type){
        case "ADD_COUNTER":
            return (
                state.concat({counter : action.payload})
            )
        case "REMOVE_COUNTER":
            return state.pop();
        default:
            return state;
    }

}

export default counterStore