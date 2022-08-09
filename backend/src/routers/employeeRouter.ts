import { Router } from "express"
import employeeController  from "../controllers/employeeController.js";
import employeeValidations from "../middlewares/employeeValidations.js";

const employeeRouter = Router()

employeeRouter.post('/sign-in', employeeValidations.validateSigninInfo, employeeController.signInController);

export default employeeRouter;


