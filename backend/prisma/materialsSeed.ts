import chalk from 'chalk';
import prisma from '../src/config/database.js';

async function main() {
  await createFilms();
  await createProfile();
  await createLightSources();
  await createPowerSupplies();
  await createAmplifiers();
  await createAccessories();
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  console.log(chalk.bold.green('Materials seed concluded!'));
  await prisma.$disconnect();
});

async function createFilms() {
  await prisma.film.createMany({
    data:[
      {name: 'translucida', branchId: 2, rawCost: 500, manufacturedCost: 6000},
      {name: 'laqueada', branchId: 2, rawCost: 500, manufacturedCost: 7000},

    ]
  });
}

async function createProfile() {
  await prisma.profile.createMany({
    data:[
      {name: 'parede', branchId: 2, rawCostPerMeter: 1200, rawCostPerKg: 4240},
      {name: 'teto', branchId: 2, rawCostPerMeter: 1200, rawCostPerKg: 4240},

    ]
  });
}

async function createLightSources() {
  await prisma.lightSource.createMany({
    data:[
      {supplier: 'ecklart', manufacturer: 'ecklart', name: 'LED Strip', type: '3000k', branchId: 2, volts: '12', lumensPerMeter: 1050, wattsPerMeter: 10, mAmpsPerMeter: 833, protection: 'IP20', metersPerRoll: 5, rollCost: 10000, meterCost: 2000},
      {supplier: 'ecklart', manufacturer: 'ecklart', name: 'LED Strip', type: '4000k', branchId: 2, volts: '24', lumensPerMeter: 1050, wattsPerMeter: 10, mAmpsPerMeter: 500, protection: 'IP20', metersPerRoll: 5, rollCost: 10000, meterCost: 2000},
      {supplier: 'ecklart', manufacturer: 'ecklart', name: 'LED Strip', type: 'RGBCCT', branchId: 2, volts: '24', lumensPerMeter: 1050, wattsPerMeter: 10, mAmpsPerMeter: 500, protection: 'IP20', metersPerRoll: 5, rollCost: 20000, meterCost: 4000}
    ]
  });
}

async function createPowerSupplies(){
  await prisma.powerSupply.createMany({
    data:[
      {supplier: 'ecklart', manufacturer: 'meanwell', name: 'LS350-12', type: 'ON/OFF', branchId: 2, volts: '12', watts: 348, mAmps: 29000, protection: 'IP20', cost: 19000},
      {supplier: 'ecklart', manufacturer: 'meanwell', name: 'LS350-24', type: 'ON/OFF', branchId: 2, volts: '24', watts: 200, mAmps: 8330, protection: 'IP20', cost: 19000},
    ]
  });
}

async function createAmplifiers(){
  await prisma.amplifier.createMany({
    data:[
      {supplier: 'futlight', manufacturer: 'miboxer', name: 'WIFI 5 IN 1', type: 'AllStrips', branchId: 2, volts: '12-24', mAmps: 15000, protection: 'IP20', cost: 21000},
    ]
  });
}

async function createAccessories(){
  await prisma.accessory.createMany({
    data:[
      {supplier: 'futlight', manufacturer: 'miboxer', name: 'B4 4 Zones RGBCCT Panel', type: 'RGBCCT Controller', branchId: 2, cost: 8000},
    ]
  });
}