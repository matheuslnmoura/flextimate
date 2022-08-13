import { Router } from 'express';
import employeeRouter from './employeeRouter.js';
import projectRouter from './projectsRouter.js';



const router = Router();

router.use(employeeRouter);
router.use(projectRouter);

export default router;