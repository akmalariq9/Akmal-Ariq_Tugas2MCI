const seat = require('../models/seat');
const seatRepository = require('../repositories/seatRepository')

const getAllSeat = async () => {
    try{
        const seats = await seatRepository.getAllSeat();
        return seats;
    }
    catch(err){
        return err;
    }
}

const getSeatBySeatNumber = async (seat_number) => {
    try{
        const seat = await seatRepository.getSeatBySeatNumber(seat_number);
        return seat;
    }
    catch(err){
        return err;
    }
}

const createSeat = async (data) => {
    try{
        const seat = await seatRepository.createSeat(data);
        return seat;
    }
    catch(err){
        return err
    }
}

const updateSeat = async (data, seat_number) => {
    try{
        const seat = seatRepository.updateSeat(data, seat_number);
        return seat;
    }
    catch(err){
        throw err;
    }
}

const deleteSeat = async (id) => {
    try{
        const seat = seatRepository.deleteSeat(id);
        return seat;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllSeat,
    getSeatBySeatNumber,
    createSeat,
    updateSeat,
    deleteSeat
}