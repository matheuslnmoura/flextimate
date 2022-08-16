import prisma from '../config/database.js';

async function registerEmployeeToBranch(employeeId: number, branchId: number) {
  return await prisma.employeeBranches.create({
    data:{
      employeeId,
      branchId
    }
  });
}

async function getAllBranchesIds() {
  return await prisma.branch.findMany({});
}

async function getBranchById(id:number) {
  return await prisma.branch.findUnique({
    where:{
      id
    }
  });
}


const branchesRepository = {
  registerEmployeeToBranch,
  getAllBranchesIds,
  getBranchById
};

export default branchesRepository;