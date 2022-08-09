import joi from 'joi';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';



function validateSigninInfo( req: Request, res: Response, next: NextFunction){ 
  const userInfo = req.body;
  const userInfoSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),

  });

  const { error } = userInfoSchema.validate(userInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw{code: 422, message: error.message};
  }

  next();
}

const employeeValidations = {
  validateSigninInfo,
}

export default employeeValidations