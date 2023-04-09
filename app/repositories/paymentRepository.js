const {payment} = require('../models')

const getAllPayment = () => {
    return payment.findAll()
}

const getPaymentById = (id) => {
    return payment.findOne(
        {
            where: {
                id: id
            }
        }
    )
}

const createPayment = (data) => {
    return payment.create(data)
}

const updatePayment = (data, id) => {
    return payment.update(data, {
        where: {
            id: id
        }
    });
}

const deletePayment = (id) => {
    return payment.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
}