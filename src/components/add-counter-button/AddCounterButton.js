import React from 'react';

/* Redux */
import {useDispatch} from "react-redux";

import { addCounter } from "../../redux/actions";

const AddButton = (state, action) => {

    let counterID = 1;

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addCounter(counterID))}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-8 mx-8">Add a counter
        </button>
    )

}

export default AddButton;