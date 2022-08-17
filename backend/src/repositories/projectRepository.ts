import { Project } from '@prisma/client';
import prisma from '../config/database.js';

const projectRepository = {
  getAll,
  getById,
  getAllByCode,
  getByBranch,
  getByBranchAndCity,
  getByDealer,
  getByStatus,
  updateStatus,
  create
};

export default projectRepository;

async function getAll() {
  return await prisma.project.findMany({
    include:{
      branch:{},
      location:{},
      status:{},
      specifier:{},
      dealer:{}
    }
  });
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

async function updateStatus(projectId: number, statusId: number, employeeId: number) {
  await prisma.project.update({
    where:{
      id: projectId
    },
    data:{
      statusId,
      assignedId: employeeId
    }
  });
}

async function getById (id: number) {
  return await prisma.project.findUnique({
    where: {
      id
    },
    select:{
      id: true,
      code: true,
      client: true,
      name: true,
      information: true,
      description: true,
      branch:{},
      address: true,
      location:{},
      totalCost: true,
      salePrice: true,
      statusId:true,
      status:{},
      createdAt: true,
      updatedAt: true,
      specifier:{},
      dealer:{},
      assigned:{
        select:{
          id: true,
          name: true,
          email: true,
          role:{},
          area:{}
        }
      },
      luminary:{
        include:{
          luminaryFilm:{
            include:{
              film:{}
            }
          },
          luminaryProfile:{
            include:{
              profile:{}
            }
          },
          luminaryLightSource:{
            include:{
              lightSource:{}
            }
          },
          luminarypowerSupply:{
            include:{
              powerSupply:{}
            }
          },
          luminaryAmplifier:{
            include:{
              amplifier:{}
            }
          },
          luminaryAccessory:{
            include:{
              accessory:{}
            }
          },
          luminaryAditionalMaterial:{
            include:{
              aditionalMaterial:{}
            }
          }
        }
      },
      projectInstallation:{
        include:{
          installationCost:{}
        }
      }

    }
  });
}