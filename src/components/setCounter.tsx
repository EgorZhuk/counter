import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css';
import UniversalButton from './universalComponents/UniversalButton';

type PropsType ={
  onChangeStart:(e:ChangeEvent<HTMLInputElement>)=>void
  onChangeMax:(e:ChangeEvent<HTMLInputElement>)=>void
  onClick:()=>void
}

export const SetCounter = (props: PropsType) => {

  // let [startValue, setStartValue]=useState<number>(1)
  // let [maxValue, setMaxValue]=useState<number>(1)



  return (
    <div className={s.counterWrapper}>
      <div className={s.setCounterInputWrapper}>
        <div className={s.inputContainer}>
          <p>Max Value</p>
          <input
            type='number'
            onChange={props.onChangeMax}
          />
        </div>
        <div className={s.inputContainer}>
          <p>Start Value</p>
          <input
            type='number'
            onChange={props.onChangeStart}

          />
        </div>
      </div>
      <div className={s.counterButtons}>

        <UniversalButton onClick={props.onClick} disabled={false} children={'Set'}/>
        {/*<UniversalButton onClick={()=>{}} disabled={false} children={'Reset'}/>*/}

      </div>

    </div>
  );
};
