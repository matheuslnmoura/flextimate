import joi from 'joi';
import DateExtension from '@joi/date';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const JoiDate = joi.extend(DateExtension);

function validateSignUpInfo( req: Request, res: Response, next: NextFunction){ 
  const userInfo = req.body;
  const userInfoSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().regex(passwordPattern).required(),
    birthday: JoiDate.date().format('YYYY-MM-DD').required(),
    roleId: joi.number().required(),
    areaId: joi.number().required(),
    branchesIds: joi.array().items(joi.number()).required()
  });

  const { error } = userInfoSchema.validate(userInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    const errorMessagesObj = {
      name: null,
      email: null,
      password: null,
      birthday: null,
      roleId: null,
      areaId: null,
      branchesIds: null
    };
    error.details.forEach(detail=>{

      if(detail.context.key === 'name') {
        errorMessagesObj.name = '\'Nome\' deve ter pelo menos três caracteres';
      }

      if(detail.context.key === 'email') {
        errorMessagesObj.email = 'Email inválido.';
      }
      if(detail.context.key === 'password') {
        errorMessagesObj.password = 'Sua senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial';
      }
      if(detail.context.key === 'birthday') {
        errorMessagesObj.birthday = 'Data de nascimento inválida';
      }
      if(detail.context.key === 'roleId') {
        errorMessagesObj.roleId = 'Cargo inválido.';
      }
      if(detail.context.key === 'areaId') {
        errorMessagesObj.areaId = 'Área inválida.';
      }
      if(detail.context.key === 'branchesIds') {
        errorMessagesObj.branchesIds = 'Unidade operacional inválida.';
      }

    });
    throw{code: 422, message: errorMessagesObj};
  }

  next();
}

function validateSignInInfo( req: Request, res: Response, next: NextFunction){ 
  const userInfo = req.body;
  const userInfoSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().regex(passwordPattern).required(),

  });

  const { error } = userInfoSchema.validate(userInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw{code: 422, message: error.message};
  }

  next();
}

function validateRedefinePassword( req: Request, res: Response, next: NextFunction){ 
  const userInfo = req.body;
  const userInfoSchema = joi.object({
    email: joi.string().email().required(),
    previousPassword: joi.string().regex(passwordPattern).required(),
    confirmPreviousPassword: joi.string().required().valid(joi.ref('previousPassword')),
    password: joi.string().regex(passwordPattern).required(),
    confirmPassword: joi.string().required().valid(joi.ref('password')),

  });

  const { error } = userInfoSchema.validate(userInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw{code: 422, message: error.message};
  }

  delete userInfo.confirmPreviousPassword;
  delete userInfo.confirmPassword;

  res.locals.user = userInfo;

  next();
}

const employeeValidations = {
  validateSignInInfo,
  validateSignUpInfo,
  validateRedefinePassword
};

export default employeeValidations;