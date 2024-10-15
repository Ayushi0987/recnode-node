const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.get('/:id', productController.getProductFromId)

router.get('/about', productController.getProductAbout)

module.exports = router