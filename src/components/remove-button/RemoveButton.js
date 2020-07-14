import React from 'react';

/* Redux */
import { useDispatch } from "react-redux";
import { decrement } from "../../redux/actions";

const RemoveButton = () => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(decrement())} className="bg-gray-100 text-black p-4">Decrement</button>
    )

}

export default RemoveButton;


