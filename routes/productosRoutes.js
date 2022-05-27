// ************ Require's ************
const express = require('express');
const router = express.Router();
//***********path ****************/
const path = require('path');


// ************ Controller Require ************
const productsController = require('../controllers/ProductsController')


router.get('/', productsController.Allproducts)


router.get("/:categoria", productsController.categoria)



module.exports = router