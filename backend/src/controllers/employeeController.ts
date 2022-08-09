import { Request, Response } from 'express'
import employeeService from '../services/employeeServices.js';


async function signInController( req: Request, res: Response) {
  const userInfo = req.body;
  const token = await employeeService.signInService(userInfo);
  res.status(200).send({token});
}

const employeeController = {
  signInController
}

export default employeeController;