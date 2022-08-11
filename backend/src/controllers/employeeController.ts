import { Request, Response } from 'express';
import employeeService from '../services/employeeServices.js';


async function signInController( req: Request, res: Response) {
  const userInfo = req.body;
  const response = await employeeService.signInService(userInfo);
  res.status(200).send(response);
}

async function signUpController( req: Request, res: Response) {
  const userInfo = req.body;
  const registredEmployee = await employeeService.signUpService(userInfo);
  res.status(201).send(registredEmployee);
}

async function getEmployeeBranches( req: Request, res: Response) {
  const employeeId = parseInt(req.params.id);
  const employeeBranches = await employeeService.getEmployeeBranches(employeeId);
  res.status(200).send(employeeBranches);
}

async function redefinePassword( req: Request, res: Response) {
  const employeeData = res.locals.user;
  await employeeService.redefinePassword(employeeData);
  
  res.status(200).send('Senha alterada com sucesso!');
}

const employeeController = {
  signInController,
  signUpController,
  getEmployeeBranches,
  redefinePassword
};

export default employeeController;