const seminar = require('../models/seminar');
const seminarRepository = require('../repositories/seminarRepository')

const getAllSeminar = async () => {
    try{
        const seminars = await seminarRepository.getAllSeminar();
        return seminars;
    }
    catch(err){
        return err;
    }
}

const getSeminarByLocation = async (location) => {
    try{
        const seminar = await seminarRepository.getSeminarByLocation(location);
        return seminar;
    }
    catch(err){
        return err;
    }
}

const createSeminar = async (data) => {
    try{
        const seminar = await seminarRepository.createSeminar(data);
        return seminar;
    }
    catch(err){
        return err
    }
}

const updateSeminar = async (data, id) => {
    try{
        const seminar = seminarRepository.updateSeminar(data, id);
        return seminar;
    }
    catch(err){
        throw err;
    }
}

const deleteSeminar = async (title) => {
    try{
        const seminar = seminarRepository.deleteSeminar(title);
        return seminar;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllSeminar,
    getSeminarByLocation,
    createSeminar,
    updateSeminar,
    deleteSeminar
}