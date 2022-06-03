const {body} = require('express-validator')

const ValidationsProducts = [
    body('nombre', "Debe introducir un nombre").notEmpty(),
    body("price","Debe introducir un precio").notEmpty(),
    body("photo", " Debe introducir una foto").notEmpty(),
    body("color", " Debe seleccionar al menos un color").exists(), 
    body("size", " Debe seleccionar al menos un talle").exists(), 
    body("category", " Debe seleccionar una categoria").exists(),      
]

module.exports = ValidationsProducts