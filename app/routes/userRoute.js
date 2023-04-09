const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUser);
router.get('/:name', userController.getUserByName);
router.post('/', userController.createUser);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);

module.exports = router;