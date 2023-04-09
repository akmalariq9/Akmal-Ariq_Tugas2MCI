const router = require('express').Router();
const seminarController = require('../controllers/seminarController');

router.get('/', seminarController.getAllSeminar);
router.get('/:location', seminarController.getSeminarByLocation);
router.post('/', seminarController.createSeminar);
router.put('/:id', seminarController.updateSeminar);
router.delete('/:title', seminarController.deleteSeminar);

module.exports = router;