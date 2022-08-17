/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import * as S from './style';
import EmployeeContext from '../../contexts/employeeContext';
import ProjectContext from '../../contexts/projectContext';
import HeaderComponent from '../../components/header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import {FaArrowLeft} from 'react-icons/fa';
import {BsPlusCircle} from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';

import axios from 'axios';
import dotenv from 'dotenv';
import { ProjectInfoContainer } from './style';
dotenv.config();


export default function ProjectPage() {
  const navigate = useNavigate();
  const {token} = useContext(EmployeeContext);
  const {project, setProject} = useContext(ProjectContext);
  const [informationVisibility, setInformationVisibility] = useState(false);
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  

  async function getProject() {
    try {

      const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      };
      const {data} = await axios.get( 
        process.env.REACT_APP_API_URL + `/projects/get/id/${project.id}`,
        config
      );

      setProject(data);
      
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(()=>{
    if(project.information ) {
      setInformationVisibility(!informationVisibility);
    }
  
    if(project.description) {
      setDescriptionVisibility(!descriptionVisibility);
    }
  
    if(!token) {
      navigate('/');
    }
  
    getProject();
  },[]);


  return(
    <>
      <div className="page-wrapper">
        <HeaderComponent />
        <S.bodyWrapper>
          <SideMenu />
          <S.projectArea>
            <S.HeaderWrapper>
              <div className="arrow-icons-wrapper" onClick={()=>{navigate('/projects');}}>
                <FaArrowLeft />
              </div>
              <h1>{`${project.code} - ${project.name}`}</h1>
            </S.HeaderWrapper>
            <S.ProjectDisplay>
              <S.ProjectInfoWrapper>
                <ProjectInfoContainer>
                  <div className="field-container">
                    <p>Código:</p>
                    <input type='text' disabled ={'true'} value={project.code ? project.code : '-'} />
                  </div>
                  <div className="field-container">
                    <p>Cliente:</p>
                    <input type='text' disabled ={'true'} value={project.client ? project.client : '-'} />
                  </div>
                  <div className="field-container">
                    <p>Unidade Operacional:</p>
                    <input type='text' disabled ={true} value={project.branch ? 'Tensoflex ' + project.branch.name : '-'} />
                  </div>
                  <div className="field-container">
                    <p>Responsável:</p>
                    <input type='text' disabled ={'true'} value={project.assigned ? project.assigned.name : '-'} />
                  </div>
                </ProjectInfoContainer>
                <ProjectInfoContainer>
                  <div className="field-container">
                    <p>Nome do Projeto:</p>
                    <input type='text' disabled ={'true'} value={project.name ? project.name : '-'} />
                  </div>
                  <div className="field-container address-container">
                    <div className="row">
                      <p>Endereço:</p>
                      <span>{project.address && project.location ? `${project.address} `: '-'} </span>
                    </div>
                    <div className="row">
                      <span>{project.location ? project.location.cityName : '-' }</span>
                      <span> - </span>
                      <span>{project.location ? project.location.stateName + ', ' : '-' }</span>
                    </div>
                    <div className="row">
                      <span>{project.location ? project.location.countryName : '-'}</span>
                    </div>
                  </div>
                </ProjectInfoContainer>
              </S.ProjectInfoWrapper>
              <S.ProjectDescriptionWrapper >
                <S.InformationLabelWrapper display = {informationVisibility ? 'flex' : 'none'}>
                  <p>Informação</p>
                  <S.ProjectInfoContainer>
                    <span>{project.information}</span>
                  </S.ProjectInfoContainer>

                </S.InformationLabelWrapper>

                <S.DescriptionLabelWrapper display = {descriptionVisibility ? 'flex' : 'none'}>
                  <p>Descrição</p>
                  <S.ProjectInfoContainer>
                    <span>{project.description}</span>
                  </S.ProjectInfoContainer>

                </S.DescriptionLabelWrapper>

              </S.ProjectDescriptionWrapper>

              <S.QuoteInfo >
                {project.statusId === 1 ? 
                
                  <S.ButtonWrapper onClick={()=>{navigate(`/project/${project.code}/quote`);}}>
                    <div>
                      <BsPlusCircle/>
                    </div>
                    <p>Iniciar Orçamento</p>
                  </S.ButtonWrapper>
                  :

                  <h1>Quote Info</h1>
                
                }

              </S.QuoteInfo>


              

            </S.ProjectDisplay>
          
          </S.projectArea>

        </S.bodyWrapper>
      </div>

    </>
  );
}