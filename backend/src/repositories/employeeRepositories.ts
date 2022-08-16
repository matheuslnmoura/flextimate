import prisma from '../config/database.js';

import { employeeSignUpData} from '../services/employeeServices.js';


async function findUserById(id: number) {
  return await prisma.employee.findUnique({
    where: {id}
  });
}
async function findUserByEmail(email: string) {
  return await prisma.employee.findUnique({
    where: {email}
  });
}


async function createEmployee(employeeData:employeeSignUpData) {
  return await prisma.employee.create({
    data: {...employeeData}
  });
}

async function redefinePassword (id: number, password: string) {
  return await prisma.employee.update({
    where:{
      id,
    },
    data:{
      password
    }
  });
}

async function getEmployeeBranches(employeeId: number) {
  return await prisma.employee.findUnique({
    where:{id: employeeId},
    include:{
      employeeBranches:{
        select:{
          branch:{}
        }
      }
    }
  });
}


const employeeRepository = {
  findUserById,
  findUserByEmail,
  createEmployee,
  getEmployeeBranches,
  redefinePassword
};

export default employeeRepository;