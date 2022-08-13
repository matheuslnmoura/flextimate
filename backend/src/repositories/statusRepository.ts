import prisma from '../config/database.js';

const statusRepository = {
  getAll,
  getById
};

export default statusRepository;

async function getAll() {
  return await prisma.status.findMany({});
}

async function getById(id: number) {
  return await prisma.status.findUnique({
    where: {
      id
    }
  });
}