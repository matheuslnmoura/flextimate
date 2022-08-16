import prisma from '../../config/database.js';

const accessoriesRepository = {
  getById
};

export default accessoriesRepository;

async function getById(id: number) {
  return await prisma.accessory.findUnique({
    where:{
      id
    }
  });
}