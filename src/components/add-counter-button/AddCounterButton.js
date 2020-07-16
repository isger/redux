import React from 'react';

/* Redux */
import { useDispatch } from "react-redux";

const AddButton = () => {

    const dispatch = useDispatch();

    return (
        <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-8 mx-8"
            onClick={() => dispatch( /* NOTHING */)}>Add a counter
        </button>
    )

}

export default AddButton;