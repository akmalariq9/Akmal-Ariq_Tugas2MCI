const registration = require('../models/registration');
const registrationService = require('../services/registrationService');

const getAllRegistration = async (req, res) => {
    registrationService.getAllRegistration()
    .then(registrations => {
        if(!registrations){
            res.status(200).send({
                status : error,
                message : 'Registration data not found :(',
                data : registrations
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Registration data found :D',
                data : registrations
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

const getRegistrationById = async (req, res) => {
    registrationService.getRegistrationById(req.params.id)
    .then(registrations => {
        if(!registrations){
            res.status(404).send({
                status : 'error',
                message : 'Registration Data Not Found :(',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Registration Data Found :D',
                data : registrations
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

const createRegistration = async(req, res) => {
    const data = {
        registration_time : req.body.registration_time,
        paid_status : req.body.paid_status,
        payment_id : req.body.payment_id,
        user_id : req.body.user_id,
        seminar_id : req.body.seminar_id,
        seat_id : req.body.seat_id
    }
    registrationService.createRegistration(data)
    .then(registration => {
        res.status(200).send({
            status : 'Success',
            message : 'Registration data successfully Added! :D',
            data : registration
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

const updateRegistration = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    registrationService.updateRegistration(data, id)
    .then(registration => {
        if(!registration){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Update Registration',
                data: registration
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Update Registration',
            data: registration
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

const deleteRegistration = (req, res) => {
    const id = req.params.id;
    registrationService.deleteRegistration(id)
    .then(registration => {
        if(!registration){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Delete Registration',
                data: registration
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Success to Delete Registration',
            data: registration
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
    getAllRegistration,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
}