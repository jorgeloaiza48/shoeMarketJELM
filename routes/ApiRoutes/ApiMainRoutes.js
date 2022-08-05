const express = require('express')
const router = express.Router()

const ApiProductsRoutes = require("./ApiProductsRoutes")


//** router de productos **//
router.use("/products", ApiProductsRoutes)


module.exports = router;