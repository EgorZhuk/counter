import React, {useState} from 'react';
import s from './counter.module.css'

const Counter = () => {
  let [counter, setCounter]=useState<number>(0)

  // let countStyle = counter===5?s.counterValue +' '+ s.red: s.counterValue
  let countStyle = `${s.counterValue} ${counter === 5 ? s.red : ''}`
  const countIncHandler =()=>{

    setCounter(counter+1)

  }
  const countResetHandler =()=>{
    setCounter(0)
  }

  // if (counter===5){
  //     countStyle = s.counterValue +' '+ s.red
  //
  // }

  return (
    <div className={s.counterWrapper}>
      <div className={countStyle}>
        {counter}
      </div>
      <div className={s.counterButtons}>
        <button onClick={countIncHandler} disabled={counter===5}>inc</button>
        <button onClick={countResetHandler} disabled={counter===0}>reset</button>
      </div>
    </div>
  );
};

export default Counter;