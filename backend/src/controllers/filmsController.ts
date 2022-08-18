import { Request, Response } from 'express';
import filmsServices from '../services/filmsServices.js';


const filmsController = {
  getAllByBranch
};

export default filmsController;

async function getAllByBranch(req: Request, res: Response) {
  const branchId = parseInt(req.params.branchId);
  const films = await filmsServices.getAllByBranch(branchId);
  res.status(200).send(films);
}