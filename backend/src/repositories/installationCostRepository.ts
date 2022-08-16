import prisma from '../config/database.js';

const installationCostRepository = {
  getById,
};

export default installationCostRepository;

async function getById(id: number) {
  return await prisma.installationCosts.findUnique({
    where: {
      id
    }
  });
}