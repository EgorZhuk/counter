import React from 'react';

type ButtonPropsType={
  onClick: ()=>void,
  disabled: boolean
  children: string
}

const UniversalButton: React.FC<ButtonPropsType> = (props ) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled} >{props.children}</button>
  );
};

export default UniversalButton;