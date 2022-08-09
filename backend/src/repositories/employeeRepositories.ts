import prisma from "../config/database.js";


async function findUserByEmail(email: string) {
  return await prisma.employee.findUnique({
    where: {email}
  });
}




const employeeRepository = {
  findUserByEmail,
}

export default employeeRepository;