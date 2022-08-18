import filmsRepository from '../repositories/materialsRepositories/filmsRepository.js';


const filmsServices = {
  getAllByBranch
};

export default filmsServices;

async function getAllByBranch(branchId: number) {
  const films = await filmsRepository.getAllByBranch(branchId);
  return films;
}