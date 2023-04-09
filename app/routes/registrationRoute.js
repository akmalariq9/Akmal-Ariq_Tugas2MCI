const router = require('express').Router();
const registrationController = require('../controllers/registrationController');

router.get('/', registrationController.getAllRegistration);
router.get('/:id', registrationController.getRegistrationById);
router.post('/', registrationController.createRegistration);
router.put('/:id', registrationController.updateRegistration);
router.delete('/:id', registrationController.deleteRegistration);

module.exports = router;