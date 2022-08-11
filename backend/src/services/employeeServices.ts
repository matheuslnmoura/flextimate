import branchesRepository from '../repositories/branchesRepositories.js';
import employeeRepository from '../repositories/employeeRepositories.js';
import emailUtils from '../utils/emailUtils.js';
import employeeUtils from '../utils/employeeUtils.js';

export type employeeSignInData ={
  email: string;
  password: string;
}

export type employeeSignUpDataAndBranches = {
  name: string;
  email: string;
  password: string;
  birthday: Date;
  roleId: number;
  areaId: number;
  branchesIds: number[]
}

export type employeeSignUpData = Omit<employeeSignUpDataAndBranches, 'branchesIds'>

export type redefinePasswordObj = {
  email: string;
  previousPassword: string;
  password: string
}

async function signInService(signInInfo: employeeSignInData) {
  const {email, password} = signInInfo;
  const user = await checkIfUserExists(email);
  const {id, password: hashPassword} = user;
  employeeUtils.validatePassword(password, hashPassword);
  const token = await employeeUtils.createToken(id);
  delete user.password;
  delete user.layOffDate;
  return {
    token,
    user
  };
}

async function checkIfUserExists(email: string) {
  const user = await employeeRepository.findUserByEmail(email);
  if(!user) {
    throw {code: 404, message: 'User not found. Try to sign up instead'};
  }
  return user;
}

async function signUpService(signUpInfo: employeeSignUpDataAndBranches) {
  const {email, name, password, branchesIds} = signUpInfo;
  await checkIfEmailUnique(email);
  const hashPassword = employeeUtils.encryptPassword(password);
  const encryptedEmployeeInfo = {
    ...signUpInfo,
    password: hashPassword,
    birthday: new Date(signUpInfo.birthday)
  };
  delete encryptedEmployeeInfo.branchesIds;
  const registredEmployee = await employeeRepository.createEmployee(encryptedEmployeeInfo);
  const { id } = registredEmployee;
  await registerEmployeeBranches(id, branchesIds);

  await emailUtils.sendRegisterEmail(email, name, password);

  delete registredEmployee.password;
  return registredEmployee;

}

async function checkIfEmailUnique(email: string) {
  const employee = await employeeRepository.findUserByEmail(email);
  if(employee) {
    throw {code: 401, message: 'Email já resgistrado!'};
  }
  return;
}

async function registerEmployeeBranches(id: number, branchesIds: number[]) {
  branchesIds.forEach( async (branchId) => {
    await branchesRepository.registerEmployeeToBranch(id, branchId);
  });
  return;
}

async function getEmployeeBranches(employeeId: number) {
  const employeeBranches = await employeeRepository.getEmployeeBranches(employeeId);
  return employeeBranches;
  
}

async function redefinePassword(redefinePasswordInfo: redefinePasswordObj) {
  const {email, previousPassword, password} = redefinePasswordInfo;
  const user = await checkIfUserExists(email);
  await checkIfPasswordsAreEqual(previousPassword, password);
  const {id, password: previousHashPassword} = user;
  employeeUtils.validatePassword(previousPassword, previousHashPassword);

  const hashPassword = employeeUtils.encryptPassword(password);
  const updatedEmployee = await employeeRepository.redefinePassword(id, hashPassword);
  if(!updatedEmployee) {
    throw{code: 500, message: 'Alguma coisa deu errado. Tente novamente.'};
  }
  return;
}

function checkIfPasswordsAreEqual(previousPassword: string, password: string){
  if(previousPassword === password) {
    throw {code: 401, message: 'A senha nova não pode ser a mesma da anterior.'};
  }
  return;
}

const employeeService = {
  signInService,
  signUpService,
  getEmployeeBranches,
  redefinePassword
};

export default employeeService;