import React, {useState} from 'react';
import './App.css';

import AddButton from "../add-button/AddButton";
import RemoveButton from "../remove-button/RemoveButton";

import AddCounterButton from "../add-counter-button/AddCounterButton";

import {useSelector} from "react-redux";

function App() {

    const counter = useSelector(state => state.counterReducer);
    const counterIndex = useSelector(state => state.counterController);

    let [counterArray, setCounterArray] = useState([]);

    const showMoreCounters = () => {

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

        return counterArray;

    }

    return (
        <div className="App">
            <header className="App-header">

                <AddCounterButton />

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
