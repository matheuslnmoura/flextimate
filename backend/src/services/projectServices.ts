import { Branch, Employee } from '@prisma/client';
import branchesRepository from '../repositories/branchesRepositories.js';
import locationRepository from '../repositories/locationRepository.js';
import projectRepository from '../repositories/projectRepository.js';
import statusRepository from '../repositories/statusRepository.js';


export type createProjectInputData = {
  name: string;
  client: string;
  information: string;
  description?: string;
  branchId: number;
  address: string;
  cityId: number;
  cityName: string;
  stateId: number;
  stateCode: string;
  stateName: string;
  countryId: number;
  countryCode: string;
  countryName: string;
  totalCost?: number;
  salePrice?: number;
  specifierId?: number;
  dealerId?: number

}

const projectService = {
  create,
  getAll,
  getByStatus,

};

export default projectService;

async function create(projectInfo: createProjectInputData, employeeInfo: Employee){
  const {name, client, information, description, branchId, address, totalCost, salePrice, specifierId, dealerId, cityId, cityName, stateId, stateCode, stateName, countryId, countryCode, countryName} = projectInfo;
  const branch = await checkBranch(branchId);
  const location = await checkCity(cityId, cityName, stateId, stateCode, stateName, countryId, countryCode, countryName);
  const code = await createCode(branch, cityName, dealerId);  
  const {id: employeeId} = employeeInfo;

  const projectObj = {
    code, 
    name,
    client,
    information,
    description,
    branchId,
    address,
    locationId: location.id,
    totalCost,
    salePrice,
    assignedId: employeeId,
    specifierId,
    dealerId
  };

  const project = await projectRepository.create(projectObj);

  if(!project) {
    throw {code: 500, message: 'Não foi possível criar o projeto. Revise seus dados.'};
  }

  return project;
}

async function checkBranch(branchId: number) {
  const branch = await branchesRepository.getBranchById(branchId);
  if(!branch) {
    throw {code: 422, message: 'Unidade operacional inválida.'};
  }
  return branch;
}

async function checkCity(
  cityId: number,
  cityName: string,
  stateId: number,
  stateCode: string,
  stateName: string,
  countryId: number,
  countryCode: string,
  countryName: string
) {
  let location =  await locationRepository.getCityByCityId(cityId);
  if(!location) {
    const locationObj = {
      cityId,
      cityName,
      stateId,
      stateCode,
      stateName,
      countryId,
      countryCode,
      countryName,
    };
    location = await locationRepository.createLocation(locationObj);
  }
  if(!location) {
    throw {code: 422, message: 'Não foi possível adicionar o local de instalação. Tende novamente'};
  }
  return location;
}

async function createCode(branch: Branch, cityName: string, dealerId: number) {
  let codePrefix = `P${branch.code}`;
  if(branch.name === 'brasil') {
    if(cityName === 'São Paulo') {
      codePrefix = 'PS';
    } else {
      codePrefix = 'PJ';
    }
  }
  if(dealerId) {
    codePrefix = 'RV';
  }

  const projectNumber = await getProjectNumber(branch, cityName, dealerId);

  const year = getProjectYear();

  const code = `${codePrefix} ${projectNumber}-${year}`;
  return code;

}

async function getProjectNumber(branch: Branch, cityName: string, dealerId: number) {
  const projectsArr = await getProjectCode(branch, cityName, dealerId);
  let projectNumber = '0';

  if(projectsArr.length >= 99) {
    projectNumber = `${projectsArr.length + 1}`;
  }

  if(projectsArr.length >= 9 && projectsArr.length < 99) {
    projectNumber = `0${projectsArr.length + 1}`;
  }

  if(projectsArr.length < 9) {
    projectNumber = `00${projectsArr.length + 1}`;
  }

  return projectNumber;
}

async function getProjectCode(branch: Branch, cityName: string, dealerId: number){
  let projectsArr = [];
  if (dealerId) {
    projectsArr = await projectRepository.getByDealer(dealerId);
    return projectsArr;
  }
  if(branch.name === 'brasil' && cityName === 'São Paulo') {
    const location = await locationRepository.getCityByCityName(cityName);
    projectsArr = await projectRepository.getByBranchAndCity(branch.id, location.id);

    return projectsArr;
  }

  projectsArr = await projectRepository.getByBranch(branch.id);
  return projectsArr;
}

function getProjectYear() {
  const date = new Date();
  const fullYear = (date.getFullYear()).toString();
  const year = fullYear[(fullYear.length - 2)] + fullYear[(fullYear.length - 1)];
  return year;
}

async function getAll() {
  const projects = await projectRepository.getAll();
  if(!projects) {
    throw{ code: 404, message: 'Não foi possível encontrar projetos. Tente novamente'};
  }
  return projects;
}

async function getByStatus(statusId: number) {
  await checkStatus(statusId);
  const projects = await projectRepository.getByStatus(statusId);
  if(!projects) {
    throw{ code: 404, message: 'Não foi possível encontrar projetos. Tente novamente'};
  }
  return projects;
}

async function checkStatus(statusId: number) {
  const status = await statusRepository.getById(statusId);
  if(!status) {
    throw {code: 404, message: 'Status inválido.'};
  }
  return;
}