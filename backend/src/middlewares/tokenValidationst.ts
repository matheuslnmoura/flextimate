import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import employeeRepository from '../repositories/employeeRepositories.js';
import { Employee } from '@prisma/client';



dotenv.config();

const tokenValidations = {
  isAdmLvl,
  isManagerLvl,
  validateEmployee
};

export default tokenValidations;

async function isAdmLvl(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers;

  const user: Employee = await getUserByToken(authorization, res);

  if(user.roleId !== 1) {                       //isNotAdmin
    throw{code: 401, message: 'Apenas funcionários com papel de Administrador podem realizar essa ação. Contate seu superior'};
  }

  res.locals.user = user;

  next();
}

async function isManagerLvl(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers;

  const user: Employee = await getUserByToken(authorization, res);

  if(user.roleId >= 2) {                       //isNotAdminOrManager
    throw{code: 401, message: 'Apenas funcionários com papel de Administrador ou Gerente podem realizar essa ação. Contate seu superior'};
  }

  res.locals.user = user;

  next();
}



async function validateEmployee(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  const user: Employee = await getUserByToken(authorization, res);

  res.locals.user = user;

  next();
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getUserByToken(authorization: string, res: Response):Promise<any> {
  
  if(!authorization){
    throw{code: 400, message: 'Missing Token'};
  }
  
  if(authorization.slice(0, 7) !== 'Bearer ') {
    throw {code: 401, message: 'Invalid authorization header'};
  }
  
  const token = authorization.split(' ')[1];
  
  interface JwtPayload {
    id: number;
    }
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    const{ id } = decoded;
    
    const user: Employee = await employeeRepository.findUserById(id);
    return user;
    
  } catch (error) {
    console.log(error.name);
    if(error.name === 'TokenExpiredError') {
      return res.status(401).send('Token Expirado. Faça o login novamente.');
    }
    if(error.name === 'JsonWebTokenError') {
      return res.status(401).send('Token Inválido. Faça o login novamente.');
    }
    return res.sendStatus(500);
  }

}