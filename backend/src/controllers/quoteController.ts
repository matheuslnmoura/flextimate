import { Request, Response } from 'express';
import quoteServices from '../services/quoteServices.js';

const quoteController = {
  create,
};

export default quoteController;

async function create(req: Request, res: Response) {
  const employeeId = parseInt(res.locals.user.id);
  const projectId = parseInt(req.params.projectId);
  const quoteInputs = req.body;
  await quoteServices.create(quoteInputs, projectId, employeeId);
  res.sendStatus(201);
}

