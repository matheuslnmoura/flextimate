/* eslint-disable no-undef */
import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import {BsFillBellFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
import {RiLogoutBoxFill} from 'react-icons/ri';

import logoWhite from './../../assets/media/logo-white.png';

export default function HeaderComponent(){
	const [userLocalStorage, setUserLocalStorage] = useState('');
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const navigate = useNavigate();

	function handleDropdown() {
		setDropdownVisible(!dropdownVisible);
	}

	function handleLogout() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate('/');
	}

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
					<div className="dropdown">
						<div className="menu-item" onClick = {handleDropdown}>

							<FaUserCircle/>
							<p>{userLocalStorage.name  }</p>
							<IoIosArrowDown />
						</div>
						<S.Dropdown display ={dropdownVisible? 'flex' : 'none'} opacity ={dropdownVisible? 1 : 0} height = {dropdownVisible? '50px' : '0px'}>
							<div className="dropdown-content" onClick={handleLogout}>
								<RiLogoutBoxFill className='logout-icon' />
								<p>Sair</p>
							</div>
						</S.Dropdown>
					</div>

				</div>
			</S.HeaderContainer>
		</S.Header>
	);
}