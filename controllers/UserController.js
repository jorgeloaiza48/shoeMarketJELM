const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')

let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS

const controller = {
    register: (req, res) => { 
        res.render("users/registro", { title: "Registro" }) 
},

    createUser: function (req, res) {
        let usersFilePath = path.join(__dirname, '../data/users.json');
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //de JSON a JS


        let resultValidation = validationResult(req)
        
        if (resultValidation.errors.length > 0) {
            return res.render("users/registro", { errors: resultValidation.mapped(),oldData:req.body, title: "Registro" })//mapped convierte un array en un objeto literal
        }

        else {
            let ultimoElemento = users.length - 1
            let idNuevo = users[ultimoElemento].id + 1

            let userForm = {
                id: idNuevo,
                NombreYapellido: req.body.Nombre,
                Usuario: req.body.usuario,
                Email: req.body.email,
                FechaNacimiento: req.body.fecha,
                Domicilio1: req.body.domicilio1,
                Domicilio2: req.body.domicilio2,
                Contraseña: req.body.pass,
                ConfirmarContraseña: req.body.pass2
            }

            let NewUser = []
            let UsersJSON = fs.readFileSync(usersFilePath, 'utf-8')

            if (UsersJSON == "") {
                NewUser.push(userForm)
            }
            else {
                NewUser = JSON.parse(UsersJSON) //de JSON a JS
                NewUser.push(userForm)
            }

            fs.writeFileSync(usersFilePath, JSON.stringify(NewUser, null, "\t")) //de JS a JSON
            res.send("Usuario creado con éxito")
        }

    },

    login: (req, res) => { res.render('users/login', { title: "Login" }) },
    
    
     adminIndex: (req, res) => {
        //para estos 3 no se puede usar const ya que mas abajo cuando reescribamos los json hay q volver a declarar las variables
        // y las variables declaradas con const no se pueden modificar
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        let botas = products.filter(function (product) {
            return product.category == "Botas";
        })
        let texanas = products.filter(function (product) {
            return product.category == "Texanas";
        })
        let bucaneras = products.filter(function (product) {
            return product.category == "Bucaneras";
        })
        let borcegos = products.filter(function (product) {
            return product.category == "Borcegos";
        })
        let guillerminas = products.filter(function (product) {
            return product.category == "Guillerminas";
        })
        let giftCard = products.filter(function (product) {
            return product.category == "Gift Card";
        })
        res.render("users/admin", {
            products: products,
            botas: botas,
            texanas: texanas,
            bucaneras: bucaneras,
            borcegos: borcegos,
            guillerminas: guillerminas,
            title: "Admin",
            giftCard: giftCard
        })
    },




}

module.exports = controller