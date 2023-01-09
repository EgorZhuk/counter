import React from 'react';
import s from './counter.module.css';
import UniversalButton from './universalComponents/UniversalButton';

export const SetCounter = () => {
  return (
    <div className={s.counterWrapper}>
      <div className={s.setCounterInputWrapper}>
        <div className={s.inputContainer}>
          <p>Max Value</p>
          <input type='number'/>
        </div>
        <div className={s.inputContainer}>
          <p>Start Value</p>
          <input type='number'/>
        </div>
      </div>
      <div className={s.counterButtons}>

        <UniversalButton onClick={()=>{}} disabled={true} children={'Set'}/>
        <UniversalButton onClick={()=>{}} disabled={false} children={'Reset'}/>

      </div>

    </div>
  );
};
