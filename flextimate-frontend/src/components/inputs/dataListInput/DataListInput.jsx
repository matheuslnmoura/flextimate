/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import * as GI from './../genericInput/style';
import * as S from './style';
import dotenv from 'dotenv';
dotenv.config();

export default function DataListInput(props){
  const [isDataListVisible, setIsDataListVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const {materials, setMaterial} = props;
  
  console.log(materials);
  return(
    <>
      <S.DataListWrapper>
        <GI.InputField >
          <label>{props.label}</label>
          <div className="input-container" onClick={()=>{setIsDataListVisible(!isDataListVisible);}} >
            <input disabled = {true} value = {inputValue}/>
          </div>
        </GI.InputField>

        <S.DataList display = {isDataListVisible ? 'flex' : 'none'} >
          <div className="options-wrapper">
            {
              materials.map(material => {
                return(
                  <div className="options" key = {material.id + material.name} onClick = {(e)=>{
                    setMaterial({...material});
                    setInputValue(e.currentTarget.textContent);
                    setIsDataListVisible(false);
                  }}>
                    {material.name}
                  </div>

                );
              })

            }
          </div>
        </S.DataList>

      </S.DataListWrapper>
    
    
    </>
  );
}