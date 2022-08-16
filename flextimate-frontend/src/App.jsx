/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import EmployeeContext from './contexts/employeeContext';

import SignIn from './pages/SignIn/SignIn';

export default function App() {
  const [token, setToken] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState({});

  return(
    <EmployeeContext.Provider value = {{token, setToken, employeeInfo, setEmployeeInfo}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </EmployeeContext.Provider>
  );
}