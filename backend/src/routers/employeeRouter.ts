import { Router } from 'express';
import employeeController  from '../controllers/employeeController.js';
import employeeValidations from '../middlewares/employeeValidations.js';
import tokenValidations from '../middlewares/tokenValidationst.js';

const employeeRouter = Router();

employeeRouter.post('/sign-in', employeeValidations.validateSignInInfo, employeeController.signInController);
employeeRouter.post('/register-employee', tokenValidations.isAdmLvl, employeeValidations.validateSignUpInfo, employeeController.signUpController );
employeeRouter.get('/employee/:id', tokenValidations.isAdmLvl, employeeController.getEmployeeBranches );
employeeRouter.patch('/employee/redefine-password', employeeValidations.validateRedefinePassword, employeeController.redefinePassword );

export default employeeRouter;


