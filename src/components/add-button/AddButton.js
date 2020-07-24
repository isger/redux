import React from 'react';

/* Redux */
import { useDispatch } from "react-redux";
import { addCounter } from "../../redux/actions";

const AddButton = () => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addCounter(1))} className="bg-gray-100 text-black p-4">Increment</button>
    )

}

export default AddButton;


