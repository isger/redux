import React from 'react';
import './App.css';

import AddButton from "../add-button/AddButton";
import RemoveButton from "../remove-button/RemoveButton";

import AddCounterButton from "../add-counter-button/AddCounterButton";

import {useSelector} from "react-redux";

const App = () => {

    let controller = useSelector(state => state.counterStore);

    return (
        <div className="App">
            <header className="App-header">

                <AddCounterButton />

                <div className="flex">
                    {controller.map((counter, index) => {
                        return (
                            <div key={index} className="text-center w-1/3">
                                <h1 className="text-6xl mx-auto my-8">Counter {index}</h1>
                                <div className="inline-block">
                                    <AddButton
                                        counterToUpdate={index}
                                    />
                                    <RemoveButton
                                        counterToUpdate={index}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </header>
        </div>
    );
}

export default App;
