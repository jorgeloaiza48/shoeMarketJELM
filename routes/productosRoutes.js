// ************ Require's ************
const express = require('express');
const router = express.Router();
//***********path ****************/
const path = require('path');

//*********multer ********/

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
}
)
const upload = multer({ storage })

// ************ Controller Require ************
const productsController = require('../controllers/ProductsController')


router.get('/', productsController.Allproducts)


router.get("/:categoria", productsController.categoria)



module.exports = router