const router = require('express').Router();
const speakerController = require('../controllers/speakerController');

router.get('/', speakerController.getAllSpeaker);
router.get('/:email', speakerController.getSpeakerByEmail);
router.post('/', speakerController.createSpeaker);
router.put('/:name', speakerController.updateSpeaker);
router.delete('/:email', speakerController.deleteSpeaker);

module.exports = router;