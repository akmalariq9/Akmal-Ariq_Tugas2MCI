const speaker = require('../models/speaker');
const speakerRepository = require('../repositories/speakerRepository')

const getAllSpeaker = async () => {
    try{
        const speakers = await speakerRepository.getAllSpeaker();
        return speakers;
    }
    catch(err){
        return err;
    }
}

const getSpeakerByEmail = async (email) => {
    try{
        const speaker = await speakerRepository.getSpeakerByEmail(email);
        return speaker;
    }
    catch(err){
        return err;
    }
}

const createSpeaker = async (data) => {
    try{
        const speaker = await speakerRepository.createSpeaker(data);
        
        return speaker;
    }
    catch(err){
        return err
    }
}

const updateSpeaker = async (data, name) => {
    try{
        const speaker = speakerRepository.updateSpeaker(data, name);
        return speaker;
    }
    catch(err){
        throw err;
    }
}

const deleteSpeaker = async (email) => {
    try{
        const speaker = speakerRepository.deleteSpeaker(email);
        return speaker;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllSpeaker,
    getSpeakerByEmail,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker
}