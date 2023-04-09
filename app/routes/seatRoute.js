const router = require('express').Router();
const seatController = require('../controllers/seatController');

router.get('/', seatController.getAllSeat);
router.get('/:seat_number', seatController.getSeatBySeatNumber);
router.post('/', seatController.createSeat);
router.put('/:seat_number', seatController.updateSeat);
router.delete('/:id', seatController.deleteSeat);

module.exports = router;