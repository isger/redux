import React from 'react';
import './App.css';

import AddButton from "../add-button/AddButton";
import RemoveButton from "../remove-button/RemoveButton";

import { useSelector } from "react-redux";

function App() {

    const counter = useSelector(state => state.counterReducer);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-6xl mx-auto my-8">{counter}</h1>
          <div className="inline-block">
            <RemoveButton /> <AddButton />
          </div>
      </header>
    </div>
  );
}

export default App;
