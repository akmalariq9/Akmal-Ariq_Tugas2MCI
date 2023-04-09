const seminar = require('../models/seminar');
const seminarService = require('../services/seminarService');

const getAllSeminar = async (req, res) => {
    seminarService.getAllSeminar()
    .then(seminars => {
        if(!seminars){
            res.status(200).send({
                status : error,
                message : 'Seminar data not found :(',
                data : seminars
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Seminar data found :D',
                data : seminars
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

const getSeminarByLocation = async (req, res) => {
    seminarService.getSeminarByLocation(req.params.location)
    .then(seminars => {
        if(!seminars){
            res.status(404).send({
                status : 'error',
                message : 'Seminar Data Not Found :(',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Seminar Data Found :D',
                data : seminars
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

const createSeminar = async(req, res) => {
    const data = {
        title : req.body.title,
        location : req.body.location,
        time : req.body.date,
        duration : req.body.duration,
        speaker_id : req.body.speaker_id
    }
    seminarService.createSeminar(data)
    .then(seminar => {
        res.status(200).send({
            status : 'Success',
            message : 'Seminar data successfully Added! :D',
            data : seminar
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

const updateSeminar = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    seminarService.updateSeminar(data, id)
    .then(seminar => {
        if(!seminar){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Update Seminar',
                data: seminar
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Update Seminar',
            data: seminar
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

const deleteSeminar = (req, res) => {
    const title = req.params.title;
    seminarService.deleteSeminar(title)
    .then(seminar => {
        if(!seminar){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Delete Seminar',
                data: seminar
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Delete seminar',
            data: seminar
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

module.exports = {
    getAllSeminar,
    getSeminarByLocation,
    createSeminar,
    updateSeminar,
    deleteSeminar
}