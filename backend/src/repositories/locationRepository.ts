import { Location } from '@prisma/client';
import prisma from '../config/database.js';

const locationRepository = {
  getCityByCityId,
  getCityByCityName,
  createLocation
};

export default locationRepository;

async function getCityByCityId(cityId: number) {
  return await prisma.location.findFirst({
    where:{
      cityId,
    }
  });
}

async function getCityByCityName(cityName: string) {
  return await prisma.location.findFirst({
    where:{
      cityName
    }
  });
}

async function createLocation(locationInfo: Omit<Location, 'id'>) {
  return await prisma.location.create({
    data:locationInfo
  });
}