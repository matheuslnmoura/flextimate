/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import * as S from './../ProjectPage/style';
import * as QuoteStyle from './style.js';
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
import LuminaryField from '../../components/Luminary/Luminary';
dotenv.config();


export default function ProjectQuotePage() {
	const navigate = useNavigate();
	const {token} = useContext(EmployeeContext);
	const {project, setProject} = useContext(ProjectContext);
	const [informationVisibility, setInformationVisibility] = useState(false);
	const [descriptionVisibility, setDescriptionVisibility] = useState(false);
	const [materialsVisibility, setMaterialsVisibility] = useState(true);
	const quote = {
		luminaries: [
			{
				description:'',
				quantity: 0,
				materials: {
					films: [
            
					]
				}
			}
		]

	};

	console.log(quote);
  

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
    // eslint-disable-next-line react-hooks/exhaustive-deps 
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
								<S.ProjectInfoContainer>
									<div className="field-container">
										<p>C??digo:</p>
										<input type='text' disabled ={true} value={project.code ? project.code : '-'} />
									</div>
									<div className="field-container">
										<p>Cliente:</p>
										<input type='text' disabled ={false} value={project.client ? project.client : '-'} />
									</div>
									<div className="field-container">
										<p>Unidade Operacional:</p>
										<input type='text' disabled ={true} value={project.branch ? 'Tensoflex ' + project.branch.name : '-'} />
									</div>
									<div className="field-container">
										<p>Respons??vel:</p>
										<input type='text' disabled ={true} value={project.assigned ? project.assigned.name : '-'} />
									</div>
								</S.ProjectInfoContainer>
								<S.ProjectInfoContainer>
									<div className="field-container">
										<p>Nome do Projeto:</p>
										<input type='text' disabled ={true} value={project.name ? project.name : '-'} />
									</div>
									<div className="field-container address-container">
										<div className="row">
											<p>Endere??o:</p>
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
								</S.ProjectInfoContainer>
							</S.ProjectInfoWrapper>
							<S.ProjectDescriptionWrapper >
								<S.InformationLabelWrapper display = {informationVisibility ? 'flex' : 'none'}>
									<p>Informa????o</p>
									<S.ProjectInfoContainer>
										<span>{project.information}</span>
									</S.ProjectInfoContainer>

								</S.InformationLabelWrapper>

								<S.DescriptionLabelWrapper display = {descriptionVisibility ? 'flex' : 'none'}>
									<p>Descri????o</p>
									<S.ProjectInfoContainer>
										<span>{project.description}</span>
									</S.ProjectInfoContainer>

								</S.DescriptionLabelWrapper>

							</S.ProjectDescriptionWrapper>

							<S.QuoteInfo >
								<QuoteStyle.QuoteInfo>
									<QuoteStyle.NavBarWrapper>
										<QuoteStyle.MaterialsNav onClick={()=>{
											setMaterialsVisibility(true);
										}} >
											<h1>Materiais</h1>
										</QuoteStyle.MaterialsNav>
                    
										<QuoteStyle.MaterialsNav onClick={()=>{
											setMaterialsVisibility(false);
										}} >
											<h1>Instala????o</h1>
										</QuoteStyle.MaterialsNav>

									</QuoteStyle.NavBarWrapper>

									<QuoteStyle.StaticBorder />
									<QuoteStyle.DinamicBorder leftSpacing = {materialsVisibility ? '0' : '50%'}/>
                  
									<QuoteStyle.QuoteArea>
										<QuoteStyle.MaterialsField display = {materialsVisibility ? 'flex' : 'none'} >
											<LuminaryField quote = {quote} />
											<LuminaryField quote = {quote} />
										</QuoteStyle.MaterialsField>


										<QuoteStyle.InstallationField display = {materialsVisibility ? 'none' : 'flex'}  >


										</QuoteStyle.InstallationField >


									</QuoteStyle.QuoteArea>    

								</QuoteStyle.QuoteInfo>
							</S.QuoteInfo>


              

						</S.ProjectDisplay>
          
					</S.projectArea>

				</S.bodyWrapper>
			</div>

		</>
	);
}