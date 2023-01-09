import React, {useState} from 'react';
import s from './counter.module.css'
import UniversalButton from './universalComponents/UniversalButton';

type PropsType={
  countIncHandler: ()=>void
  countResetHandler: ()=>void
  countValue: number
  maxCountValue: number
}

const Counter = (props:PropsType) => {
  // let [counter, setCounter]=useState<number>(0)

  let countStyle = `${s.counterValue} ${props.countValue === props.maxCountValue ? s.red : ''}`

  // const countIncHandler =()=>{
  //   setCounter(counter+1)
  // }
  // const countResetHandler =()=>{
  //   setCounter(0)
  // }

  return (
    <div className={s.counterWrapper}>
      <div className={countStyle}>
        {props.countValue}
      </div>
      <div className={s.counterButtons}>

        <UniversalButton onClick={props.countIncHandler} disabled={props.countValue===props.maxCountValue} children={'Inc'}/>
        <UniversalButton onClick={props.countResetHandler} disabled={props.countValue===0} children={'Reset'}/>


      </div>
    </div>
  );
};

export default Counter;