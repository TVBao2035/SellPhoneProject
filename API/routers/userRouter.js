const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/', userController.index);
router.post('/getOne',userController.getOne);
router.post('/save', userController.save);
router.post('/update/profile',userController.updateProfile);


module.exports = router;
