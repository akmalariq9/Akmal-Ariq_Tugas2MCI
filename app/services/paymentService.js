const payment = require('../models/payment');
const paymentRepository = require('../repositories/paymentRepository')

const getAllPayment = async () => {
    try{
        const payments = await paymentRepository.getAllPayment();
        return payments;
    }
    catch(err){
        return err;
    }
}

const getPaymentById = async (id) => {
    try{
        const payment = await paymentRepository.getPaymentById(id);
        return payment;
    }
    catch(err){
        return err;
    }
}

const createPayment = async (data) => {
    try{
        const payment = await paymentRepository.createPayment(data);
        return payment;
    }
    catch(err){
        return err
    }
}

const updatePayment = async (data, id) => {
    try{
        const payment = paymentRepository.updatePayment(data, id);
        return payment;
    }
    catch(err){
        throw err;
    }
}

const deletePayment = async (id) => {
    try{
        const payment = paymentRepository.deletePayment(id);
        return payment;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
}