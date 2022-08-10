import prisma from '../src/config/database.js';
import employeeRepository from '../src/repositories/employeeRepositories.js';
import employeeUtils from '../src/utils/employeeUtils.js';

async function main() {
  await createMasterUser();
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});

async function createMasterUser() {
  const user = {
    name: 'Master Adm',
    email: 'adm@admin.com',
    password: '123456',
    birthday: new Date('2000-01-01'),
    areaId: 8,
    roleId: 1
  };

  const hashPassword = employeeUtils.encryptPassword(user.password);
  
  const encyptedUser = {
    ...user,
    password: hashPassword
  };

  const createdUser = await employeeRepository.createEmployee(encyptedUser);
  console.log(createdUser);
}
