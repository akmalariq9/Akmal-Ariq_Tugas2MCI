const {speaker} = require('../models')

const getAllSpeaker = () => {
    return speaker.findAll()
}

const getSpeakerByEmail = (email) => {
    return speaker.findOne(
        {
            where: {
                email: email
            }
        }
    )
}

const createSpeaker = (data) => {
    return speaker.create(data)
}

const updateSpeaker = (data, name) => {
    return speaker.update(data, {
        where: {
            name: name
        }
    });
}

const deleteSpeaker = (email) => {
    return speaker.destroy({
        where: {
            email: email
        }
    });
}

module.exports = {
    getAllSpeaker,
    getSpeakerByEmail,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker
}