const seat = require('../models/seat');
const seatService = require('../services/seatService');

const getAllSeat = async (req, res) => {
    seatService.getAllSeat()
    .then(seats => {
        if(!seats){
            res.status(200).send({
                status : error,
                message : 'Seat data not found :(',
                data : seats
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Seat data found :D',
                data : seats
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

const getSeatBySeatNumber = async (req, res) => {
    seatService.getSeatBySeatNumber(req.params.seat_number)
    .then(seats => {
        if(!seats){
            res.status(404).send({
                status : 'error',
                message : 'Seat Data Not Found :(',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'Seat Data Found :D',
                data : seats
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

const createSeat = async(req, res) => {
    const data = {
        seat_number : req.body.seat_number,
        seminar_id: req.body.seminar_id
    }
    seatService.createSeat(data)
    .then(seat=> {
        res.status(200).send({
            status : 'Success',
            message : 'Seat data successfully Added! :D',
            data : seat
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

const updateSeat = (req, res) => {
    const data = req.body;
    const seat_number = req.params.seat_number;
    seatService.updateSeat(data, seat_number)
    .then(seat => {
        if(!seat){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Update Seat',
                data: seat
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Update Seat',
            data: seat
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

const deleteSeat = (req, res) => {
    const id = req.params.id;
    seatService.deleteSeat(id)
    .then(seat => {
        if(!seat){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Delete Seat',
                data: seat
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Success to Delete Seat',
            data: seat
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
    getAllSeat,
    getSeatBySeatNumber,
    createSeat,
    updateSeat,
    deleteSeat
}