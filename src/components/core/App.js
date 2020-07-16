import React, {useState} from 'react';
import './App.css';

import AddButton from "../add-button/AddButton";
import RemoveButton from "../remove-button/RemoveButton";

import {useSelector} from "react-redux";

function App() {

    const counter = useSelector(state => state.counterReducer);

    let [counterIndex, setCounterIndex] = useState(1);
    let [counterArray, setCounterArray] = useState([]);

    const showMoreCounters = () => {

        setCounterIndex(counterIndex + 1);

        for (let i = 0; i < counterIndex || i === counterIndex; i++) {
            setCounterArray(counterArray.concat(
                <div key={i} className="text-center w-1/3">
                    <h1 className="text-6xl mx-auto my-8">Counter {i}</h1>
                    <h1 className="text-6xl mx-auto my-8">{counter}</h1>
                    <div className="inline-block">
                        <RemoveButton/> <AddButton/>
                    </div>
                </div>
            ))
        }

        console.log(counterArray);
        return counterArray;

    }

    return (
        <div className="App">
            <header className="App-header">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-8 mx-8"
                    onClick={() => showMoreCounters()}>Add a counter
                </button>
                <div className="flex">
                    {counterArray.map((value, index) => {
                        return value;
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
