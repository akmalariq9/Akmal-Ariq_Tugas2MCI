const router = require('express').Router();
const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.getAllPayment);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.createPayment);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;