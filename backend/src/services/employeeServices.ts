import employeeRepository from "../repositories/employeeRepositories.js";
import employeeUtils from "../utils/employeeUtils.js";

export type employeeData ={
  email: string;
  password: string;
}

async function signInService(userInfo: employeeData) {
  const {email, password} = userInfo;
  const user = await checkIfUserExists(email);
  const {id, password: hashPassword} = user;
  employeeUtils.validatePassword(password, hashPassword);
  const token = await employeeUtils.createToken(id);
  return token;
}

async function checkIfUserExists(email: string) {
  const user = await employeeRepository.findUserByEmail(email);
  if(!user) {
    throw {code: 404, message: 'User not found. Try to sign up instead'};
  }
  return user;
}

const employeeService = {
  signInService
}

export default employeeService