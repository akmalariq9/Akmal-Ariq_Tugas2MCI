const {seminar} = require('../models')

const getAllSeminar = () => {
    return seminar.findAll()
}

const getSeminarByLocation = (location) => {
    return seminar.findOne(
        {
            where: {
                location: location
            }
        }
    )
}

const createSeminar = (data) => {
    return seminar.create(data)
}

const updateSeminar = (data, id) => {
    return seminar.update(data, {
        where: {
            id: id
        }
    });
}

const deleteSeminar = (title) => {
    return seminar.destroy({
        where: {
            title: title
        }
    })
}

module.exports = {
    getAllSeminar,
    getSeminarByLocation,
    createSeminar,
    updateSeminar,
    deleteSeminar
}