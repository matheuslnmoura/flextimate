import { Router } from 'express';
import filmsController from '../controllers/filmsController.js';
import tokenValidations from '../middlewares/tokenValidationst.js';

const filmsRouter = Router();

filmsRouter.get('/films/get/:branchId', tokenValidations.validateEmployee, filmsController.getAllByBranch);

export default filmsRouter;