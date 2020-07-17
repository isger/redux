import React, {useState} from 'react';

/* Redux */
import {useDispatch, useSelector} from "react-redux";
import { addCounter } from "../../redux/actions";

const AddButton = () => {

    let result = useSelector(state => state.counterStore);
    console.log(result);

    const dispatch = useDispatch();

    return (
        <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-8 mx-8"
            onClick={() => dispatch(addCounter())}>Add a counter
        </button>
    )

}

export default AddButton;