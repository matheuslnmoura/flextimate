import React, { useEffect, useState } from 'react';
import {Collapse} from 'react-collapse';
import Filmsfield from '../FilmsField/FilmsField';
import {AiOutlinePlus} from 'react-icons/ai';
import MaterialsContext from '../../contexts/materialsContext';

import * as S from './style';
import GenericInput from '../inputs/genericInput/GenericInput';

export default function LuminaryField(){
  const [isLuminaryOpen, setIsLuminaryOpen] = useState(false);
  const [filmsWrapperVisibility, setFilmsWrapperVisibility] = useState(false);
  const [filmsFieldList, setFilmsFieldList] = useState([]);
  const [filmArea, setFilmArea] = useState([]);
  const [rollArea, setRollArea] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const quoteObj = {
    luminaries: [],
    services:{
      installation:[],
      logistics:[],
    }
  };
  const luminariesObj = {
    description: null,
    quantity: null,
    materials: {
      
      films:[],
      profiles:[],
      lightSources:[],
      powerSupplies: [],
      amplifiers: [],
      accessores: [],
      aditionalMaterials: []

    }
  };

  const filmsObj = {
    frontInfo: {
      rollArea: rollArea,
      filmArea: filmArea,
    }
    
  };

  useEffect(()=>{

  });

  return(
    <>
      <MaterialsContext.Provider value = {{filmsFieldList, setFilmsFieldList, quoteObj, luminariesObj, filmsObj, filmArea, setFilmArea, rollArea, setRollArea, isSaved, setIsSaved}}>
        <S.LuminaryWrapper  >
          <span className="collapse-control" onClick={()=>{setIsLuminaryOpen(!isLuminaryOpen);}} >
            <p>Luminária 1</p>
          </span>
          
          <Collapse className='collapse' isOpened = {isLuminaryOpen}>
            <S.CollapseItems>
              <div className="description-wrapper">
                <span>Descrição</span>
                <textarea />
              </div>

              <GenericInput type = {'number'} label = {'Quantidade'} />
            </S.CollapseItems>

            <S.FilmsContainer>
              <span className="material-collapse-control" onClick={()=>{setFilmsWrapperVisibility(!filmsWrapperVisibility);}} >
                <p>Telas</p>
              </span>
              <S.AddButton onClick={()=>{
                setFilmsFieldList(filmsFieldList.concat(
                  <Filmsfield 
                    key={filmsFieldList.length }
                    number = {filmsFieldList.length + 1} 
                    isSaved = {isSaved}
                    setIsSaved = {setIsSaved}
                  />));
              }} >
                <AiOutlinePlus />
                <p>Adicionar Tela</p>
              </S.AddButton>
              <Collapse isOpened = {filmsWrapperVisibility}>
              
                <S.AditionalFilmsContainer>
                  {filmsFieldList}
                </S.AditionalFilmsContainer>

              
              </Collapse>
            </S.FilmsContainer>


          </Collapse>
          
          

        </S.LuminaryWrapper>


      </MaterialsContext.Provider>

    
    </>
  );
}