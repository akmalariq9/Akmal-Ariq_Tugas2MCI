const payment = require('../models/payment');
const paymentService = require('../services/paymentService');

const getAllPayment = async (req, res) => {
    paymentService.getAllPayment()
    .then(payments => {
        if(!payments){
            res.status(200).send({
                status : error,
                message : 'Payment data not found :(',
                data : payments
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Payment data found :D',
                data : payments
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            status : 'Error!',
            message : err.message,
            data : {}
        });
    })
}

const getPaymentById = async (req, res) => {
    paymentService.getPaymentById(req.params.id)
    .then(payments => {
        if(!payments){
            res.status(404).send({
                status : 'error',
                message : 'Payment Data Not Found :(',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Payment Data Found :D',
                data : payments
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'Error!',
            message : err.message,
            data : {}
        });
    })
}

const createPayment = async(req, res) => {
    const data = {
        payment_time : req.body.payment_time,
        amount : req.body.amount
    }
    paymentService.createPayment(data)
    .then(payment => {
        res.status(200).send({
            status : 'Success',
            message : 'Payment data successfully Added! :D',
            data : payment
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'Error',
            message : err.message,
            data : {}
        });
    })
}

const updatePayment = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    paymentService.updatePayment(data, id)
    .then(payment => {
        if(!payment){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Update Payment',
                data: payment
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Update Payment',
            data: payment
        });
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: err
        })
    });
}

const deletePayment = (req, res) => {
    const id = req.params.id;
    paymentService.deletePayment(id)
    .then(payment => {
        if(!payment){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Delete Payment',
                data: payment
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Success to Delete Payment',
            data: payment
        });
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: err
        });
    })
}

module.exports = {
    getAllPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
}