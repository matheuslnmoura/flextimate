/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './style';

export default function GenericInput(props){
  const {setAmount} = props;

  return(
    <S.InputField >
      <label>{props.label}</label>
      <div className="input-container">
        <span className="currency">{props.isCurrency ? 'R$' : ''}</span>
        <input 
          type = {props.type} 
          disabled = {props.disabled} 
          value = {props.value} 
          onChange={(e)=>{
            setAmount(e.target.value);
          }}
        />
      </div>
    </S.InputField>
  );
}