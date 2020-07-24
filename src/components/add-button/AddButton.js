import React from 'react';

/* Redux */
import {useDispatch, useSelector} from "react-redux";
import { addCounter } from "../../redux/actions";

const AddButton = () => {

    let stateStuff = useSelector(state => state.counter);

    let logFunc = () => {

        console.log(stateStuff);

    }


    const dispatch = useDispatch();

    return (
        <button onClick={logFunc()} className="bg-gray-100 text-black p-4">Increment</button>
    )

}

export default AddButton;


