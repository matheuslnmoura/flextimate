import chalk from 'chalk';
import prisma from '../src/config/database.js';

async function main() {
  await createAreas();
  await createBranches();
  await createRoles();
  await createStatus();
  await createLocation();
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
      {name: 'andina', code: 'AN', currency: 'US$', measurement: 'metric'},
      {name: 'brasil', code: 'BR',currency: 'BRL', measurement: 'metric'},
      {name: 'são paulo', code: 'SP',currency: 'BRL', measurement: 'metric'},
      {name: 'florida', code: 'FL',currency: 'US$', measurement: 'imperial'},
      {name: 'europe', code: 'EU',currency: 'EUR', measurement: 'metric'},

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

async function createLocation() {
  await prisma.location.createMany({
    data:[
      {cityId: 14309, cityName: 'Rio de Janeiro', stateId: 1997, stateCode: 'RJ', stateName: 'Rio de Janeiro', countryId: 31, countryCode: 'BR', countryName: 'Brazil'},
      {cityId: 10853, cityName: 'Cabo Frio', stateId: 1997, stateCode: 'RJ', stateName: 'Rio de Janeiro', countryId: 31, countryCode: 'BR', countryName: 'Brazil'},
      {cityId: 15101, cityName: 'São Paulo', stateId: 2021, stateCode: 'SP', stateName: 'São Paulo', countryId: 31, countryCode: 'BR', countryName: 'Brazil'},
      {cityId: 13527, cityName: 'Osasco', stateId: 2021, stateCode: 'SP', stateName: 'São Paulo', countryId: 31, countryCode: 'BR', countryName: 'Brazil'},
      {cityId: 80701, cityName: 'Lima', stateId: 3695, stateCode: 'LIM', stateName: 'Lima', countryId: 173, countryCode: 'PE', countryName: 'Peru'},
      {cityId: 113345, cityName: 'Canton', stateId: 1426, stateCode: 'MI', stateName: 'Michigan', countryId: 233, countryCode: 'US', countryName: 'United States'},
      {cityId: 121746, cityName: 'Miami', stateId: 1436, stateCode: 'FL', stateName: 'Florida', countryId: 233, countryCode: 'US', countryName: 'United States'},
      {cityId: 123562, cityName: 'Orlando', stateId: 1436, stateCode: 'FL', stateName: 'Florida', countryId: 233, countryCode: 'US', countryName: 'United States'},
    ]
  });
}