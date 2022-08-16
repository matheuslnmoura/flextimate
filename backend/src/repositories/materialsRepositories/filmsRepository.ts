import prisma from '../../config/database.js';

const filmsRepository = {
  getById
};

export default filmsRepository;

async function getById(id: number) {
  return await prisma.film.findUnique({
    where:{
      id
    }
  });
}