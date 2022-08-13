import { Request, Response } from 'express';
import projectService from '../services/projectServices.js';

const projectController = {
  createProject,
  getProjects,
  getProjectsByStatus
};

export default projectController;

async function createProject(req: Request, res: Response) {
  const projectInfo = req.body;
  const employeeInfo = res.locals.user;
  const createdProject = await projectService.create(projectInfo, employeeInfo);
  res.status(201).send(createdProject);
}

async function getProjects (req: Request, res: Response) {
  const projects = await projectService.getAll();
  res.status(200).send(projects);
}

async function getProjectsByStatus(req: Request, res: Response) {
  const {status} = req.params;
  const projects = await projectService.getByStatus(parseInt(status));
  res.status(200).send(projects);
}