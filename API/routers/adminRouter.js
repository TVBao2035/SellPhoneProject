const express = require('express');
const AdminController = require('../controller/adminController');
const router = express.Router();

router.get('/user/edit/:id',AdminController.userEdit);
router.post('/user/edit/:id/update',AdminController.userUpdate);
router.post('/user/edit/:id/delete',AdminController.userDelete);
router.get('/product/edit/:id', AdminController.productEdit);
router.post('/product/edit/:id/update',AdminController.productUpdate);
router.post('/product/edit/:id/delete',AdminController.productDelete);
router.post('/product/edit/:id/create',AdminController.productCreate);
module.exports = router;