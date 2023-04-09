const speaker = require('../models/speaker');
const speakerService = require('../services/speakerService');

const getAllSpeaker = async (req, res) => {
    speakerService.getAllSpeaker()
    .then(speakers => {
        if(!speakers){
            res.status(200).send({
                status : 'error',
                message : 'Speaker data not found :(',
                data : speakers
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Speaker data found :D',
                data : speakers
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

const getSpeakerByEmail = async (req, res) => {
    speakerService.getSpeakerByEmail(req.params.email)
    .then(speakers => {
        if(!speakers){
            res.status(404).send({
                status : 'error',
                message : 'Speaker data not found :(',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Speaker data found :D',
                data : speakers
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

const createSpeaker = async(req, res) => {
    const data = {
        name : req.body.name,
        email : req.body.email,
        phone_number : req.body.phone_number
    }
    speakerService.createSpeaker(data)
    .then(speaker => {
        res.status(200).send({
            status : 'Success',
            message : 'Speaker data successfully added! :D',
            data : speaker
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

const updateSpeaker = (req, res) => {
    const data = req.body;
    const name = req.params.name;
    speakerService.updateSpeaker(data, name)
    .then(speaker => {
        if(!speaker){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Update Speaker',
                data: speaker
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Update Speaker',
            data: speaker
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

const deleteSpeaker = (req, res) => {
    const email = req.params.email;
    speakerService.deleteSpeaker(email)
    .then(speaker => {
        if(!speaker){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Delete Speaker',
                data: speaker
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Success to Delete Speaker',
            data: speaker
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
    getAllSpeaker,
    getSpeakerByEmail,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker
}