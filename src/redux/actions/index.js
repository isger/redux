export const increment = () => {
    return {
        type : 'INCREMENT'
    };
}

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
}

export const addCounter = (counterNumber) => {
    return {
        type : 'ADD_COUNTER',
        payload: {
            index: counterNumber
        }
    }
}