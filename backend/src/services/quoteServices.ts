import installationCostRepository from '../repositories/installationCostRepository.js';
import luminariesRepository from '../repositories/luminariesRepository.js';
import projectInstallationRepository from '../repositories/projectInstallationRepository.js';
import projectRepository from '../repositories/projectRepository.js';
import checkMaterialsUtils from '../utils/checkMaterialsUtils.js';



const quoteServices = {
  create,
};

export default quoteServices;

async function create(quoteInfo: QuoteInput, projectId: number, employeeId: number) {
  const registredLuminaries = await handleLuminaries(quoteInfo, projectId);
  const registredServices = await handleServices(quoteInfo, projectId);
  await projectRepository.updateStatus(projectId, 3, employeeId);

  return {
    registredLuminaries,
    registredServices
  };
}

async function handleLuminaries(quoteInfo: QuoteInput, projectId: number) {
  const {luminaries} = quoteInfo;
  const luminariesArr = [];
  let materials = {};
  await Promise.all(luminaries.map( async (luminary) => {
    const {description, quantity} = luminary;
    const registredLuminary = await luminariesRepository.create({description, quantity, projectId});
    materials = await checkMaterials(luminary.materials, registredLuminary.id);
    luminariesArr.push(registredLuminary);

  }));
  return {
    luminaries: luminariesArr,
    materials
  };
}

async function handleServices(quoteInfo: QuoteInput, projectId: number) {
  const registredInstallation = await checkInstallation(quoteInfo, projectId);
  const registredLogistics = await checkLogistics(quoteInfo, projectId);
  return {
    installation : registredInstallation,
    logistics : registredLogistics
  };
}

async function checkMaterials(materials: MaterialsType, luminaryId: number) {
  const films = await checkMaterialsUtils.checkFilms(materials.films, luminaryId);
  const profiles = await checkMaterialsUtils.checkProfiles(materials.profiles, luminaryId);
  const lightSources = await checkMaterialsUtils.checkLightSources(materials.lightSources, luminaryId);
  const powerSupplies = await checkMaterialsUtils.checkPowerSupplies(materials.powerSupplies, luminaryId);
  const amplifiers = await checkMaterialsUtils.checkAmplifiers(materials.amplifiers, luminaryId);
  const accessories = await checkMaterialsUtils.checkAccessories(materials.accessories, luminaryId);
  const aditionalMaterials = await checkMaterialsUtils.checkAditionalMaterials(materials.aditionalMaterials, luminaryId);

  const materialsObj = {
    films, 
    profiles,
    lightSources,
    powerSupplies,
    amplifiers,
    accessories,
    aditionalMaterials,
  };

  return materialsObj;
}

async function checkInstallation(quoteInfo: QuoteInput, projectId: number) {
  const {services} = quoteInfo;
  const {installation: installationItems} = services || {};
  if(!installationItems) {
    return []
  }
  const registredInstallation = await Promise.all(installationItems.map( async (item) => {
    const installation = await installationCostRepository.getById(item.installationCostId);
    if(!installation) {
      throw {code: 404, message: 'Serviço não encontrado!'};
    }
    const {installationCostId, installationCostQty: installationCostQuantity} = item;
    return await projectInstallationRepository.create({
      installationCostId,
      installationCostQuantity,
      projectId
    });
  }));
  return registredInstallation;
}

async function checkLogistics(quoteInfo: QuoteInput, projectId: number) {
  const {services} = quoteInfo;
  const {logistics: logisticsItems} = services || {};
  if(!logisticsItems) {
    return [];
  }
  const registredLogistics = await Promise.all(logisticsItems.map( async (item) => {
    const logistic = await installationCostRepository.getById(item.installationCostId);
    if(!logistic) {
      throw {code: 404, message: 'Serviço de logística não encontrado!'};
    }
    const {installationCostId, installationCostQty: installationCostQuantity} = item;
    return await projectInstallationRepository.create({
      installationCostId,
      installationCostQuantity,
      projectId
    });
  }));
  return registredLogistics;
}



export type QuoteInput = {
  luminaries: {
    description: string;
    quantity: number;
    materials:{
      films:{
        filmId: number;
        filmQty: number;
      }[],
      profiles?:{
        profileId: number;
        profileQty: number;
      }[],
      lightSources?:{
        lightSourceId: number;
        lightSourceQty: number;
      }[],
      powerSupplies?:{
        powerSupplyId: number;
        powerSupplyQty: number;
      }[],
      amplifiers?:{
        amplifierId: number;
        amplifierQty: number;
      }[],
      accessories?:{
        accessoryId: number;
        accessoryQty: number;
      }[],
      aditionalMaterials?:{
        aditionalMaterialId: number;
        aditionalMaterialQty: number;
      }[],
    }
  }[],
  services?: {
    installation?:{
      installationCostId: number;
      installationCostQty: number;
    }[],
    logistics?:{
      installationCostId: number;
      installationCostQty: number;
    }[],
  }
}

export type LuminariesType = {
  luminaries: {
    description: string;
    quantity: number;
    materials:{
      films:{
        filmId: number;
        filmQty: number;
      }[],
      profiles?:{
        profileId: number;
        profileQty: number;
      }[],
      lightSources?:{
        lightSourceId: number;
        lightSourceQty: number;
      }[],
      powerSupplies?:{
        powerSupplyId: number;
        powerSupplyQty: number;
      }[],
      amplifiers?:{
        amplifierId: number;
        amplifierQty: number;
      }[],
      accessories?:{
        accessoryId: number;
        accessoryQty: number;
      }[],
      aditionalMaterials?:{
        aditionalMaterialId: number;
        aditionalMaterialQty: number;
      }[],
    }
  }[],
}

export type MaterialsType = {
    films:{
      filmId: number;
      filmQty: number;
    }[],
    profiles?:{
      profileId: number;
      profileQty: number;
    }[],
    lightSources?:{
      lightSourceId: number;
      lightSourceQty: number;
    }[],
    powerSupplies?:{
      powerSupplyId: number;
      powerSupplyQty: number;
    }[],
    amplifiers?:{
      amplifierId: number;
      amplifierQty: number;
    }[],
    accessories?:{
      accessoryId: number;
      accessoryQty: number;
    }[],
    aditionalMaterials?:{
      aditionalMaterialId: number;
      aditionalMaterialQty: number;
    }[],
  
}


export type ServicesType = {
    installation:{
      installationCostId: number;
      installationCostQty: number;
    }[],
    logistics?:{
      installationCostId: number;
      installationCostQty: number;
    }[],
  }