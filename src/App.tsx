import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import {SetCounter} from './components/setCounter';

type CounterType ={
  startValue: number
  maxValue: number
  countValue: number
  error: boolean
}



function App() {

  let [counter, setCounter]=useState<CounterType>({
    startValue: 0,
    maxValue: 5,
    countValue:0,
    error: false
  })

  const countIncHandler =()=>{
    setCounter({...counter, countValue: counter.countValue+1})
  }
  const countResetHandler =()=>{
    setCounter({...counter, countValue: 0})
  }

  const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) =>{

  }

  const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) =>{

  }

  const onClickSetValueHandler = ()=>{
  }

  return (
    <div className="App-header">

      <SetCounter
        onChangeStart={onChangeStartValueHandler}
        onChangeMax={onChangeMaxValueHandler}
        onClick={onClickSetValueHandler}

      />
      <Counter
        countIncHandler={countIncHandler}
        countResetHandler={countResetHandler}
        countValue={counter.countValue}

      />
    </div>
  );
}

export default App;
