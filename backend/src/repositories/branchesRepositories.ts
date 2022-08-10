import prisma from '../config/database.js';

async function registerEmployeeToBranch(employeeId: number, branchId: number) {
  return await prisma.employeeBranches.create({
    data:{
      employeeId,
      branchId
    }
  });
}


const branchesRepository = {
  registerEmployeeToBranch
};

export default branchesRepository;