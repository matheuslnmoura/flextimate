/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import {Collapse} from 'react-collapse';
import GenericInput from '../inputs/genericInput/GenericInput';
import MaterialsContext from '../../contexts/materialsContext';
import {AiTwotoneDelete} from 'react-icons/ai';
import axios from 'axios';
import dotenv from 'dotenv';
import EmployeeContext from './../../contexts/employeeContext';
dotenv.config();

import * as S from './style';
import DataListInput from '../inputs/dataListInput/DataListInput';
import ProjectContext from '../../contexts/projectContext';

export default function Filmsfield(props){
  const [isFilmFieldOpen, setIsFilmFieldOpen] = useState(false);
  const {filmsFieldList, setFilmsFieldList, filmsObj, filmArea, setFilmArea, rollArea, setRollArea, isSaved, setIsSaved} = useContext(MaterialsContext);
  const {token} = useContext(EmployeeContext);
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState({});
  const {project} = useContext(ProjectContext);
  let {rawCost, manufacturedCost, salesPrice} = film || {};
  rawCost = (rawCost/100).toFixed(2);
  manufacturedCost = (manufacturedCost/100).toFixed(2);
  salesPrice = (salesPrice/100).toFixed(2);
  


  async function getFilms() {
    try {

      const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      };
      const {data} = await axios.get( 
        process.env.REACT_APP_API_URL + `/films/get/${project.branch.id}`,
        config
      );

      setFilms([...data]);
      
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(()=>{
    getFilms();
  },[]);
  



  return(
    <>
      <MaterialsContext.Provider value = {{setFilm, films}}>
        <S.FilmWrapper>
          <div className="film-header film-collapse-control" 
            onClick={()=>{setIsFilmFieldOpen(!isFilmFieldOpen);}
            } >
            <p>{`Tela ${props.number}`}</p>
            <div className="delete-icon" onClick={()=>{
              filmsFieldList.pop();
              setFilmsFieldList([...filmsFieldList]);
            }}>
              <AiTwotoneDelete />
            </div>

          </div>

          <Collapse isOpened={isFilmFieldOpen}>
            <S.InputsWrapper>
              <S.InputsRow>
                <GenericInput label = {'Formato de Tela'} type = {'text'} disabled = {true} value = {'Orgânico'} />
                <DataListInput label = {'Tipo de Filme'} materials = {films} setMaterial = {setFilm} />
                <GenericInput label = {'Área de Tela'} setAmount = {setFilmArea} type = {'number'} />
                <GenericInput label = {'Área de Bobina'} setAmount = {setRollArea} type = {'number'} />
              </S.InputsRow>
      
              <S.InputsRow>
                <GenericInput label = {'Custo por m² - Bruto'} isCurrency = {true} type = {'text'} value = {rawCost ? rawCost : '-'} />
                <GenericInput label = {'Custo por m² - Prod.'} isCurrency = {true} type = {'text'} value = {manufacturedCost ? manufacturedCost : '-'} />
                <GenericInput label = {'Custo Total'} isCurrency = {true} type = {'text'} value = {(filmsObj.frontInfo.filmArea*manufacturedCost) + ((filmsObj.frontInfo.rollArea-filmsObj.frontInfo.filmArea)*rawCost)} />

              </S.InputsRow>

              <S.InputsRow>
                <GenericInput label = {'Venda por m²'} disabled = {true} isCurrency = {true} type = {'text'} value = {salesPrice} />
                <GenericInput label = {'Venda Total'} disabled = {true} isCurrency = {true} type = {'text'} value = {filmsObj.frontInfo.rollArea * salesPrice} />
              </S.InputsRow>

              <button onClick = {()=>{
                setIsSaved(true);

              }}>Salvar</button>


            </S.InputsWrapper>

            
          
        
          </Collapse>

        </S.FilmWrapper>

      </MaterialsContext.Provider>
    
    </>
  );
}