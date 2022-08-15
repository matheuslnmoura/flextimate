import prisma from '../../config/database.js';

const powerSupplyRepository = {
  getById
};

export default powerSupplyRepository;

async function getById(id: number) {
  return await prisma.powerSupply.findUnique({
    where:{
      id
    }
  });
}