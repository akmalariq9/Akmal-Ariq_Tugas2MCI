const registration = require('../models/registration');
const registrationRepository = require('../repositories/registrationRepository')

const getAllRegistration = async () => {
    try{
        const registrations = await registrationRepository.getAllRegistration();
        return registrations;
    }
    catch(err){
        return err;
    }
}

const getRegistrationById = async (id) => {
    try{
        const registration = await registrationRepository.getRegistrationById(id);
        return registration;
    }
    catch(err){
        return err;
    }
}

const createRegistration = async (data) => {
    try{
        const registration = await registrationRepository.createRegistration(data);
        return registration;
    }
    catch(err){
        return err
    }
}

const updateRegistration = async (data, id) => {
    try{
        const registration = registrationRepository.updateRegistration(data, id);
        return registration;
    }
    catch(err){
        throw err;
    }
}

const deleteRegistration = async (id) => {
    try{
        const registration = registrationRepository.deleteRegistration(id);
        return registration;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllRegistration,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
}