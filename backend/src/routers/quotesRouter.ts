import { Router } from 'express';
import quoteController from '../controllers/quoteController.js';
import quoteValidations from '../middlewares/quoteValidations.js';
import tokenValidations from '../middlewares/tokenValidationst.js';

const quotesRouter = Router();

quotesRouter.post ('/quotes/create/:projectId', tokenValidations.validateEmployee, quoteValidations.create, quoteController.create);
quotesRouter.get('/quotes/get/:projectId', tokenValidations.validateEmployee, );
export default quotesRouter;