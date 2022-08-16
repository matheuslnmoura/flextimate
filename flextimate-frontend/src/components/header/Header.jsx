import React, { useEffect, useState, } from 'react';
import * as S from './style';
import {BsFillBellFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';

import logoWhite from './../../assets/media/logo-white.png';

export default function HeaderComponent(){
  const [userLocalStorage, setUserLocalStorage] = useState('');

  useEffect(()=>{
    setUserLocalStorage(JSON.parse(localStorage.getItem('user')));
  }, []);

  return(
    <S.Header >
      <S.HeaderContainer>
        <div className="logo-container">
          <img src={logoWhite} alt="" />
        </div>
        <div className="right-menu">
          <div className="menu-item">
            <BsFillBellFill />
            <p>Notificações</p>
          </div>
          <div className="menu-item">
            <FaUserCircle/>
            <p>{userLocalStorage.name  }</p>
            <IoIosArrowDown />
          </div>
        </div>
      </S.HeaderContainer>
    </S.Header>
  );
}