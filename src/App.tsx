import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import {SetCounter} from './components/setCounter';

function App() {
  return (
    <div className="App-header">

      <SetCounter/>
      <Counter/>
    </div>
  );
}

export default App;
