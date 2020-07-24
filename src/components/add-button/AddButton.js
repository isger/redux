import React from 'react';

const AddButton = (props) => {

    let logFunc = () => {
        console.log(props.counterToUpdate);
    }

    return (
        <button onClick={logFunc()} className="bg-gray-100 text-black p-4">Increment</button>
    )

}

export default AddButton;


