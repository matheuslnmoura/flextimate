import prisma from '../../config/database.js';

const amplifierRepository = {
  getById
};

export default amplifierRepository;

async function getById(id: number) {
  return await prisma.amplifier.findUnique({
    where:{
      id
    }
  });
}