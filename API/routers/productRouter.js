const express = require('express');
const ProductController = require('../controller/productController');
const router = express.Router();

router.get('/', ProductController.index);

module.exports = router;