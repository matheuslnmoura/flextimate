import { Project } from '@prisma/client';
import prisma from '../config/database.js';

const projectRepository = {
  getAll,
  getAllByCode,
  getByBranch,
  getByBranchAndCity,
  getByDealer,
  getByStatus,
  create
};

export default projectRepository;

async function getAll() {
  return await prisma.project.findMany({});
}

async function getAllByCode() {
  return await prisma.project.findMany({
    where:{
      
    }
  });
}

async function getByBranch(branchId: number) {
  return await prisma.project.findMany({
    where:{
      branchId
    }
  });
}

async function getByDealer(dealerId: number) {
  return await prisma.project.findMany({
    where:{
      dealerId
    }
  });
}

async function getByBranchAndCity(branchId: number, locationId: number) {
  return await prisma.project.findMany({
    where:{
      branchId,
      locationId
    }
  });
}

async function getByStatus(statusId: number) {
  return await prisma.project.findMany({
    where:{
      statusId
    }
  });
}

async function create(projectInfo: Omit<Project, 'id'|'createdAt'|'updatedAt'|'specifierId'|'dealerId'|'statusId'>) {
  return await prisma.project.create({
    data: projectInfo
  });
}