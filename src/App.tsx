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
    setCounter({...counter, countValue: counter.startValue})
  }

  const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    setCounter({...counter, startValue: +event.currentTarget.value})
  }

  const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    setCounter({...counter, maxValue: +event.currentTarget.value})
  }

  const onClickSetValueHandler = ()=>{
    setCounter({...counter, countValue: counter.startValue})
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
        maxCountValue={counter.maxValue}

      />
    </div>
  );
}

export default App;
