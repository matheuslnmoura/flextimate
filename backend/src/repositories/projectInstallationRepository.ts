import { ProjectInstallation } from '@prisma/client';
import prisma from '../config/database.js';

const projectInstallationRepository = {
  create,
};

export default projectInstallationRepository;

async function create(info: Omit<ProjectInstallation, 'id'>) {
  return await prisma.projectInstallation.create({
    data: info
  });
}