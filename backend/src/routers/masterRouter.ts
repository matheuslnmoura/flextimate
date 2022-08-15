import { Router } from 'express';
import employeeRouter from './employeeRouter.js';
import projectRouter from './projectsRouter.js';
import quotesRouter from './quotesRouter.js';



const router = Router();

router.use(employeeRouter);
router.use(projectRouter);
router.use(quotesRouter);

export default router;