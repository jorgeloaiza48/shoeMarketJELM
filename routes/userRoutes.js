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

const upload = multer({ storage })


// **Creación o registro de usuarios**
router.get('/registro', userController.register)
router.post('/registro',upload.single('imagenProducto'),Validations, userController.createUser ); 

// **Logueo de usuarios**
router.get('/login',userController.login)
router.post("/login",userController.processLogin)

// **Edición de usuarios**
//router.get('/editar',userController.listarUsuarios)
// router.post("/editar/:id",userController.editar)


module.exports = router