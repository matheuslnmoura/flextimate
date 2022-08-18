import prisma from '../../config/database.js';

const filmsRepository = {
  getAllByBranch,
  getById
};

export default filmsRepository;

async function getAllByBranch(branchId: number) {
  return await prisma.film.findMany({
    where:{
      branchId
    }
  });
}

async function getById(id: number) {
  return await prisma.film.findUnique({
    where:{
      id
    }
  });
}