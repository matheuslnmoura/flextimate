import luminariesRepository from '../repositories/luminariesRepository.js';
import accessoriesRepository from '../repositories/materialsRepositories/accessoriesrepository.js';
import aditionalMaterialsRepository from '../repositories/materialsRepositories/aditionalMaterialsRepository.js';
import amplifierRepository from '../repositories/materialsRepositories/amplifiersRepository.js';
import filmsRepository from '../repositories/materialsRepositories/filmsRepository.js';
import lightSourceRepository from '../repositories/materialsRepositories/lightSourceRepository.js';
import powerSupplyRepository from '../repositories/materialsRepositories/powerSupplyRepository.js';
import profilesRepository from '../repositories/materialsRepositories/profilesRepository.js';

const checkMaterialsUtils = {
  checkFilms,
  checkProfiles,
  checkLightSources,
  checkPowerSupplies,
  checkAmplifiers,
  checkAccessories,
  checkAditionalMaterials
};

export default checkMaterialsUtils;

async function checkFilms(filmsInput: {filmId: number, filmQty: number}[], luminaryId: number) {
  if(filmsInput) {
    const films = await Promise.all(filmsInput.map(async(film) => {
      const filmObj = await filmsRepository.getById(film.filmId);
      if(!filmObj) {
        throw {code: 404, message: 'Filme não encontrado.'};
      }
      const registredObj = await luminariesRepository.createLuminaryFilm({luminaryId, filmId: film.filmId, filmQuantity: film.filmQty});
      return registredObj;
    }));
    return films;
  }
}

async function checkProfiles(profilesInput: {profileId: number, profileQty: number}[], luminaryId: number) {
  if(profilesInput) {
    const profiles = await Promise.all(profilesInput.map(async(profile) => {
      const profilesObj = await profilesRepository.getById(profile.profileId);
      if(!profilesObj) {
        throw {code: 404, message: 'Perfil não encontrado.'};
      }
      const registredObj = await luminariesRepository.createLuminaryProfile({luminaryId, profileId: profile.profileId, profileQuantity: profile.profileQty});
      return registredObj;
    }));
    return profiles;
  }
}

async function checkLightSources(lightSourcesInput: {lightSourceId: number, lightSourceQty: number}[], luminaryId: number) {
  if(lightSourcesInput) {
    const lightSources = await Promise.all(lightSourcesInput.map(async(lightSource) => {
      const lightSourcesObj = await lightSourceRepository.getById(lightSource.lightSourceId);
      if(!lightSourcesObj) {
        throw {code: 404, message: 'Fonte de luz não encontrada.'};
      }
      const registredObj = await luminariesRepository.createLuminaryLightSource({luminaryId, lightSourceId: lightSource.lightSourceId, lightSourceQuantity: lightSource.lightSourceQty});
      return registredObj;
    }));
    return lightSources;
  }
}
async function checkPowerSupplies(powerSuppliesInput: {powerSupplyId: number, powerSupplyQty: number}[], luminaryId: number) {
  if(powerSuppliesInput) {
    const powerSupplies = await Promise.all(powerSuppliesInput.map(async(powerSupply) => {
      const powerSuppliesObj = await powerSupplyRepository.getById(powerSupply.powerSupplyId);
      if(!powerSuppliesObj) {
        throw {code: 404, message: 'Driver não encontrado.'};
      }
      const registredObj = await luminariesRepository.createLuminaryPowerSupply({luminaryId, powerSupplyId: powerSupply.powerSupplyId, powerSupplyQuantity: powerSupply.powerSupplyQty});
      return registredObj;
    }));
    return powerSupplies;
  }
}


async function checkAmplifiers(amplifiersInput: {amplifierId: number, amplifierQty: number}[], luminaryId: number) {
  if(amplifiersInput) {
    const amplifiers = await Promise.all(amplifiersInput.map(async(amplifier) => {
      const amplifiersObj = await amplifierRepository.getById(amplifier.amplifierId);
      if(!amplifiersObj) {
        throw {code: 404, message: 'Amplificador não encontrado.'};
      }
      const registredObj = await luminariesRepository.createLuminaryAmplifier({luminaryId, amplifierId: amplifier.amplifierId, amplifierQuantity: amplifier.amplifierQty});
      return registredObj;
    }));
    return amplifiers;
  }
}

async function checkAccessories(checkAccessoriesInput: {accessoryId: number, accessoryQty: number}[], luminaryId: number) {
  if(checkAccessoriesInput) {
    const accessories = await Promise.all(checkAccessoriesInput.map(async(accessory) => {
      const accessoriesObj = await accessoriesRepository.getById(accessory.accessoryId);
      if(!accessoriesObj) {
        throw {code: 404, message: 'Acessório não encontrado.'};
      }
      const registredObj = await luminariesRepository.createLuminaryAccessory({luminaryId, accessoryId: accessory.accessoryId, accessoryQuantity: accessory.accessoryQty});
      return registredObj;
    }));
    return accessories;
  }
}

async function checkAditionalMaterials(aditionalMaterialsInput: {aditionalMaterialId: number, aditionalMaterialQty: number}[], luminaryId: number) {
  if(aditionalMaterialsInput) {
    const aditionalMaterials = await Promise.all(aditionalMaterialsInput.map(async(aditionalMaterial) => {
      const aditionalMaterialsObj = await aditionalMaterialsRepository.getById(aditionalMaterial.aditionalMaterialId);
      if(!aditionalMaterialsObj) {
        throw {code: 404, message: 'Material Adicional não encontrado.'};
      }
      const registredObj = await luminariesRepository.createLuminaryAditionalMaterial({luminaryId, aditionalMaterialId: aditionalMaterial.aditionalMaterialId, aditionalMaterialQuantity: aditionalMaterial.aditionalMaterialQty});
      return registredObj;
    }));
    return aditionalMaterials;
  }
}