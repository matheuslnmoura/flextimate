import { Router } from 'express';
import projectController from '../controllers/projectController.js';
import projectValidations from '../middlewares/projectValidations.js';

import tokenValidations from '../middlewares/tokenValidationst.js';

const projectRouter = Router();

projectRouter.post('/project/create', tokenValidations.validateEmployee,  projectValidations.create, projectController.createProject);
projectRouter.get('/projects/get', tokenValidations.validateEmployee, projectController.getProjects);
projectRouter.get('/projects/get/status/:status', tokenValidations.validateEmployee, projectController.getProjectsByStatus);
projectRouter.get('/projects/get/id/:id', tokenValidations.validateEmployee, projectController.getProjectById);

export default projectRouter;