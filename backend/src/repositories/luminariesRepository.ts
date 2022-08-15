import { Luminary, LuminaryAccessory, LuminaryAditionalMaterial, LuminaryAmplifier, LuminaryFilm, LuminaryLightSource, LuminaryPowerSupply, LuminaryProfile } from '@prisma/client';
import prisma from '../config/database.js';

const luminariesRepository = {
  create,
  createLuminaryFilm,
  createLuminaryProfile,
  createLuminaryLightSource,
  createLuminaryPowerSupply,
  createLuminaryAmplifier,
  createLuminaryAccessory,
  createLuminaryAditionalMaterial
};

export default luminariesRepository;

async function create(luminaryInfo: Omit<Luminary, 'id'>){
  return await prisma.luminary.create({
    data: luminaryInfo
    
  });
}

async function createLuminaryFilm(info: Omit<LuminaryFilm, 'id'>) {
  return await prisma.luminaryFilm.create({
    data:info
  });
}
async function createLuminaryProfile(info: Omit<LuminaryProfile, 'id'>) {
  return await prisma.luminaryProfile.create({
    data:info
  });
}

async function createLuminaryLightSource(info: Omit<LuminaryLightSource, 'id'>) {
  return await prisma.luminaryLightSource.create({
    data:info
  });
}

async function createLuminaryPowerSupply(info: Omit<LuminaryPowerSupply, 'id'>) {
  return await prisma.luminaryPowerSupply.create({
    data:info
  });
}

async function createLuminaryAmplifier(info: Omit<LuminaryAmplifier, 'id'>) {
  return await prisma.luminaryAmplifier.create({
    data:info
  });
}


async function createLuminaryAccessory(info: Omit<LuminaryAccessory, 'id'>) {
  return await prisma.luminaryAccessory.create({
    data:info
  });
}

async function createLuminaryAditionalMaterial(info: Omit<LuminaryAditionalMaterial, 'id'>) {
  return await prisma.luminaryAditionalMaterial.create({
    data:info
  });
}