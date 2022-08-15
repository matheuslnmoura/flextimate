import prisma from '../../config/database.js';

const aditionalMaterialsRepository = {
  getById
};

export default aditionalMaterialsRepository;

async function getById(id: number) {
  return await prisma.aditionalMaterials.findUnique({
    where:{
      id
    }
  });
}