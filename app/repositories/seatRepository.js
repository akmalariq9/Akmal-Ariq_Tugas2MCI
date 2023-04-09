const {seat} = require('../models')

const getAllSeat = () => {
    return seat.findAll()
}

const getSeatBySeatNumber = (seat_number) => {
    return seat.findOne(
        {
            where: {
                seat_number: seat_number
            }
        }
    )
}

const createSeat = (data) => {
    return seat.create(data)
}

const updateSeat = (data, seat_number) => {
    return seat.update(data, {
        where: {
            seat_number: seat_number
        }
    })
}

const deleteSeat = (id) => {
    return seat.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllSeat,
    getSeatBySeatNumber,
    createSeat,
    updateSeat,
    deleteSeat
}