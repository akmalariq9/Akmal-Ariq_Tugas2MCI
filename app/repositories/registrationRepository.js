const {registration} = require('../models')

const getAllRegistration = () => {
    return registration.findAll()
}

const getRegistrationById = (id) => {
    return registration.findOne(
        {
            where: {
                id: id
            }
        }
    )
}

const createRegistration = (data) => {
    return registration.create(data)
}

const updateRegistration = (data, id) => {
    return registration.update(data, {
        where: {
            id: id
        }
    });
}

const deleteRegistration = (id) => {
    return registration.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllRegistration,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
}