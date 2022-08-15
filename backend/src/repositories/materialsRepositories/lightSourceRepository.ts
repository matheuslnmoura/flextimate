import prisma from '../../config/database.js';

const lightSourceRepository = {
  getById
};

export default lightSourceRepository;

async function getById(id: number) {
  return await prisma.lightSource.findUnique({
    where:{
      id
    }
  });
}