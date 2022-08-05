const express = require('express');
const router = express.Router();
const ApiProductsController = require("../../controllers/apiControllers/ApiProductsController")

/* List Productos. */
router.get('/', ApiProductsController.list)






module.exports = router;