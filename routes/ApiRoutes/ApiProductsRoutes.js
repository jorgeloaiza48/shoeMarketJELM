const express = require('express');
const router = express.Router();
const ApiProductsController = require("../../controllers/apiControllers/ApiProductsController")

/* List Productos. */
router.get('/', ApiProductsController.list)

router.get("/detail/:id",ApiProductsController.detail)






module.exports = router;