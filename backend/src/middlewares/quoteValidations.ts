import joi from 'joi';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const quoteValidations = {
  create
};

export default quoteValidations;

function create( req: Request, res: Response, next: NextFunction){ 
  const quoteInfo = req.body;
  const quoteInfoSchema = joi.object().keys({
    luminaries: joi.array().items({
      description: joi.string().required(),
      quantity: joi.number().required(),
      materials: joi.object().keys({
        films: joi.array().items(joi.object({
          filmId: joi.number().required(),
          filmQty: joi.number().required(),
        })).required(),
        profiles: joi.array().items(joi.object({
          profileId: joi.number().required(),
          profileQty: joi.number().required(),
        })),
        lightSources: joi.array().items(joi.object({
          lightSourceId: joi.number().required(),
          lightSourceQty: joi.number().required(),
        })),
        powerSupplies: joi.array().items(joi.object({
          powerSupplyId: joi.number().required(),
          powerSupplyQty: joi.number().required(),
        })),
        amplifiers: joi.array().items(joi.object({
          amplifierId: joi.number().required(),
          amplifierQty: joi.number().required(),
        })),
        accessories: joi.array().items(joi.object({
          accessoryId: joi.number().required(),
          accessoryQty: joi.number().required(),
        })),
        aditionalMaterials: joi.array().items(joi.object({
          aditionalMaterialId: joi.number().required(),
          aditionalMaterialQty: joi.number().required(),
        })),
      }).required(), 

    }).required(),

    services: joi.object().keys({
      installation: joi.array().items(joi.object({
        installationCostId: joi.number().required(),
        installationCostQty: joi.number().required(),
      })),
      logistics: joi.array().items(joi.object({
        installationCostId: joi.number().required(),
        installationCostQty: joi.number().required(),
      })),

    })


  }).required();

  const { error } = quoteInfoSchema.validate(quoteInfo, {abortEarly: false});

  if(error) {
    console.log(chalk.bold.red(error));
    throw{code: 422, message: error.message};
  }

  next();
}