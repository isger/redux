import React, {useState} from 'react';

/* Redux */
import {useDispatch} from "react-redux";

import { addCounter } from "../../redux/actions";

const initialState = {
    counters: [{counter: 0}]
}

const AddButton = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addCounter())}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-8 mx-8">Add a counter
        </button>
    )

}

export default AddButton;