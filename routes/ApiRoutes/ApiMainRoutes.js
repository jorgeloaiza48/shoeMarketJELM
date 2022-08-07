const express = require('express')
const router = express.Router()
const ApiProductsRoutes = require("./ApiProductsRoutes")
const ApiUsersRoutes = require("./ApiUsersRoutes")


//** router de productos **//
router.use("/products", ApiProductsRoutes)

//** router de usuarios **//
router.use("/users", ApiUsersRoutes)

module.exports = router;