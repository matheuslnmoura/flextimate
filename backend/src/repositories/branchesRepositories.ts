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


const branchesRepository = {
  registerEmployeeToBranch,
  getAllBranchesIds
};

export default branchesRepository;