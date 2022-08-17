/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import EmployeeContext from './contexts/employeeContext';
import ProjectContext from './contexts/projectContext';

import SignIn from './pages/SignIn/SignIn';
import ProjectsHomePage from './pages/ProjectsHomePage/ProjectsHomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ProjectQuotePage from './pages/ProjectQuotePage/ProjectQuotePage';

export default function App() {
  const [token, setToken] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});

  return(
    <EmployeeContext.Provider value = {{token, setToken, employeeInfo, setEmployeeInfo}} >
      <ProjectContext.Provider value = {{projects, setProjects, project, setProject}} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/projects' element={<ProjectsHomePage />}/>
            <Route path='/project/:code' element={<ProjectPage />}/>
            <Route path='/project/:code/quote' element={<ProjectQuotePage />}/>
          </Routes>
        </BrowserRouter>
      </ProjectContext.Provider>
    </EmployeeContext.Provider>
  );
}