const express = require('express')
const router = express.Router()
const path = require("path")
const multer = require("multer")

const userController = require('../controllers/UserController')
const Validations = require("../middlewares/Validations")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
}
)

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/users"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
}
)



const uploadProduct = multer({storage})
const uploadUser = multer({storage2})


// **Creación o registro de usuarios**
router.get('/registro', userController.register)
router.post('/registro',uploadProduct.single("photo"),Validations, userController.createUser ); 

// **Logueo de usuarios**
router.get('/login',userController.login)
router.post("/login",userController.processLogin)

// **Edición de usuarios**
//router.get('/editar',userController.listarUsuarios)
// router.post("/editar/:id",userController.editar)


module.exports = router