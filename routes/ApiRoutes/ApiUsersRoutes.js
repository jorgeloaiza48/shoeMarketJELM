const express = require('express');
const router = express.Router();
const ApiUsersController = require("../../controllers/apiControllers/ApiUsersController")


//Listado de todos los usuarios en la DB
router.get('/',ApiUsersController.list)

//Detalle del usuario
router.get('/:id',ApiUsersController.detail)

module.exports = router