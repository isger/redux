import React, {useState} from 'react';
import './App.css';

import AddButton from "../add-button/AddButton";
import RemoveButton from "../remove-button/RemoveButton";

import AddCounterButton from "../add-counter-button/AddCounterButton";

import {useSelector} from "react-redux";

function App() {

    let controller = useSelector(state => state.counterStore);

   /* const showMoreCounters = () => {

        for (let i = 0; i < controller.length; i++) {
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

        <div className="flex">
                    {counterArray.map((value, index) => {
                        return value;
                    })}
                </div>

        return counterArray;

    } */

    return (
        <div className="App">
            <header className="App-header">

                <AddCounterButton />

            </header>
        </div>
    );
}

export default App;
