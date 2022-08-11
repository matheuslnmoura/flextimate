import chalk from 'chalk';
import prisma from '../src/config/database.js';

async function main() {
  await createAreas();
  await createBranches();
  await createRoles();
  await createStatus();
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  console.log(chalk.bold.green('Dependencies seed concluded!'));
  await prisma.$disconnect();
});

async function createAreas() {
  await prisma.area.createMany({
    data:[
      {name: 'comercial'},
      {name: 'orçamento'},
      {name: 'técnica'},
      {name: 'produção'},
      {name: 'instalação'},
      {name: 'financeiro'},
      {name: 'administrativo'},
      {name: 'geral'}
    ]
  });
}

async function createBranches(){
  await prisma.branch.createMany({
    data:[
      {name: 'andina', currency: 'US$', measurement: 'metric'},
      {name: 'brasil', currency: 'BRL', measurement: 'metric'},
      {name: 'usa', currency: 'US$', measurement: 'imperial'},
      {name: 'europe', currency: 'EUR', measurement: 'metric'},

    ]
  });
}

async function createRoles(){
  await prisma.role.createMany({
    data:[
      {name: 'administrador'},
      {name: 'gerente'},
      {name: 'funcionário'},
      
    ]
  });
}

async function createStatus(){
  await prisma.status.createMany({
    data:[
      {name: 'solicitado'},
      {name: 'em andamento'},
      {name: 'em revisão'},
      {name: 'em correção'},
      {name: 'aprovado (técnica)'},
      {name: 'aprovado (comerial)'},
      {name: 'aprovado (cliente)'},
    ]
  });
}