import React, {useState} from 'react';
import s from './counter.module.css'
import UniversalButton from './universalComponents/UniversalButton';

const Counter = () => {
  let [counter, setCounter]=useState<number>(0)

  let countStyle = `${s.counterValue} ${counter === 5 ? s.red : ''}`

  const countIncHandler =()=>{
    setCounter(counter+1)
  }
  const countResetHandler =()=>{
    setCounter(0)
  }

  return (
    <div className={s.counterWrapper}>
      <div className={countStyle}>
        {counter}
      </div>
      <div className={s.counterButtons}>

        <UniversalButton onClick={countIncHandler} disabled={counter===5} children={'Inc'}/>
        <UniversalButton onClick={countResetHandler} disabled={counter===0} children={'Reset'}/>


      </div>
    </div>
  );
};

export default Counter;