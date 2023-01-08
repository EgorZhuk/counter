import React from 'react';
import s from './counter.module.css';

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
        <button onClick={x=>x} disabled={true}>Set</button>
        <button onClick={x=>x} disabled={true}>Reset</button>
      </div>

    </div>
  );
};
