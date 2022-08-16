import joi from 'joi';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const projectValidations = {
  create
};

export default projectValidations;

function create( req: Request, res: Response, next: NextFunction){ 
  const projectInfo = req.body;
  const projectInfoSchema = joi.object({
    name: joi.string().required(),
    client: joi.string().required(),
    information: joi.string().required(),
    description: joi.string(),
    branchId: joi.number().required(),
    address: joi.string().required(),
    totalCost: joi.number(),
    salePrice: joi.number(),
    statusId: joi.number(),
    specifierId: joi.number(),
    dealerId: joi.number(),
    cityId: joi.number().required(),
    cityName: joi.string().required(),
    stateId: joi.number().required(),
    stateCode: joi.string().required(),
    stateName: joi.string().required(),
    countryId: joi.number().required(),
    countryCode: joi.string().required(), 
    countryName: joi.string().required(),
  });

  const { error } = projectInfoSchema.validate(projectInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw{code: 422, message: error.message};
  }

  next();
}