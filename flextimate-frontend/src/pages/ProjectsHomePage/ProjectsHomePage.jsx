/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import EmployeeContext from '../../contexts/employeeContext';
import ProjectContext from '../../contexts/projectContext';
import HeaderComponent from '../../components/header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import * as S from './style';
import {BsFilter} from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


export default function ProjectsHomePage() {
  const navigate = useNavigate();
  const {token} = useContext(EmployeeContext);
  const {projects, setProjects, setProject} = useContext(ProjectContext);


  

  async function getProjects(queryString) {
    try {
      if(!queryString) {
        queryString = '';
      }

      const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      };
      const {data} = await axios.get( 
        process.env.REACT_APP_API_URL + '/projects/get' + queryString,
        config
      );

      setProjects(data);
      
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(()=>{
    if(!token) {
      navigate('/');
    }
  
    getProjects();
  },[]);

  return(
    <>
      <div className="page-wrapper">
        <HeaderComponent />
        <S.bodyWrapper>
          <SideMenu />
          <S.projectsArea>
            <h1>Projetos</h1>
            <div className="filter-icon-wrapper">
              <BsFilter />
              <p>Filtrar</p>
            </div>
            <S.ProjectDisplay>
              <table>

                <thead>
                  <tr>
                    <th>Código do Projeto</th>
                    <th>Nome</th>
                    <th>Unidade Operacional</th>
                    <th>Status</th>
                    <th>Criado em</th>
                    <th>Especificador</th>
                    <th>Revenda</th>
                  </tr>
                </thead>
                <tbody>
                  {projects === [] ?
                    <div className="spinner-container">
                      <ThreeDots color="#fff"  width={'100%'} />
                    </div> : 
                    projects.map((project, index)=>{
                      const{ code, name, branch, status, createdAt, specifier, dealer} = project;
                      const date = new Date(createdAt);
                      const formatedDate = date.toLocaleString('pt-BR');
                      return(
                        <S.TableRow key={code + index} onClick={()=>{
                          setProject(projects[index]);
                          navigate(`/project/${code}`);
                        }}>
                          <td>{code ? code : '-'}</td>
                          <td>{name ? name : '-'}</td>
                          <td>{branch ? branch.name : '-'}</td>
                          <td>{status ? status.name : '-'}</td>
                          <td>{createdAt ? formatedDate: '-'}</td>
                          <td>{specifier ? specifier.name : '-'}</td>
                          <td>{dealer ? dealer.name : '-'}</td>
                        </S.TableRow>

                      );
                    })

                  }
                </tbody>

              </table>
              

            </S.ProjectDisplay>
          
          </S.projectsArea>

        </S.bodyWrapper>
      </div>

    </>
  );
}