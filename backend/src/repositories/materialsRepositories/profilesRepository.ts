import prisma from '../../config/database.js';

const profilesRepository = {
  getById
};

export default profilesRepository;

async function getById(id: number) {
  return await prisma.profile.findUnique({
    where:{
      id
    }
  });
}