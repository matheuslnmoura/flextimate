import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import dotenv from 'dotenv';
import {AiOutlineMail, AiOutlineLock, AiOutlineEye} from 'react-icons/ai';
import { IconContext } from 'react-icons';

import * as S from './style';
import logo from './../../assets/media/logo.png';
import EmployeeContext from './../../contexts/employeeContext';


dotenv.config();

export default function SignIn() {
  const {setToken, setEmployeeInfo} = useContext(EmployeeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageOpacity, serErrorMessageOpacity] = useState(0);
  const [showPassword, setshowPassword] = useState(false); 
  const navigate = useNavigate();

  useEffect(async ()=>{
    const user = localStorage.getItem('user'); 
    const token = localStorage.getItem('token');
    if(user && token) {
      await setToken(token);
      await setEmployeeInfo(user);
      navigate('/projects');
    }

  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password,
    };

    try {
      const {data} = await axios.post( process.env.REACT_APP_API_URL + '/sign-in', body);
      const {token, user} = data;
      await setToken(token);
      await setEmployeeInfo(user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/projects');
    } catch (err) {
      const errorData = err.response.data;
      setErrorMessage(errorData);
      serErrorMessageOpacity(1);
      setLoading(false);
    }
  };
  
  return(
    <S.SignInPage>
      <S.SignInModal>
        <S.SignInLeft>
          <div className='text-container'>
            <div className="title">Gerencie seus orçamentos</div>
            <div className="text">A solicitação, criação e gerenciamento de orçamentos nunca foi tão fácil. Utilize o Flextimate para aumentar o controle e produtividade da sua empresa</div>
          </div>
        </S.SignInLeft>
        <S.SignInRight>
          <div className="logo-wrapper"><img src={logo} alt="Flextimate Logo" /></div>
          <div className="error-messages" opacity = {errorMessageOpacity}>{errorMessage}</div>

          <S.FormWrapper onSubmit={handleSubmit}>
            <S.InputField width = {'100%'} height = {'32px'} >
              <IconContext.Provider value ={{color: '#b00511', size: '27px'}}>
                <AiOutlineMail />
              </IconContext.Provider>
              <input 
                type='text' 
                name='email' 
                placeholder='email@email.com' 
                value = {email} 
                onChange= {(e) => setEmail(e.target.value)} 
                disabled={loading}
                required
                
              />
            </S.InputField>
            <S.InputField width = {'100%'} height = {'32px'} >
              <IconContext.Provider value ={{color: '#b00511', size: '27px'}}>
                <AiOutlineLock />
              </IconContext.Provider>
              
              <input 
                type={showPassword? 'text' : 'password'} 
                name='password' 
                placeholder='&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />

              <div className='show-password-icon' onClick={()=>{setshowPassword(!showPassword);}}>
                <IconContext.Provider value ={{color: '#a2a2a2', size: '23px'}}>
                  <AiOutlineEye />
                </IconContext.Provider>
              </div>

            </S.InputField>
            <a href=''>Esqueceu a senha?</a>
            <S.Button type = 'submit' disabled = {loading} >
              {loading ? 
                <div className="spinner-container">
                  <ThreeDots color="#fff"  width={'100%'} />
                </div> : 
                'ENTRAR'}
            </S.Button>
          </S.FormWrapper>
        </S.SignInRight>

      </S.SignInModal>
    </S.SignInPage>
  );
}