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
            res.redirect("/user/login")
        }

    },

    login: (req, res) => { res.render('users/login', { title: "Login" }) },

    processLogin :(req,res) =>{ },

    listarUsuarios :(req,res) =>{
        let usersFilePath = path.join(__dirname, '../data/users.json');
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));//JSON a JS
        let usersJSON = fs.readFileSync(productsFilePath, 'utf-8')
        // let usuarios = users.find(usuario => usuario.id === parseInt(req.params.id))
        res.render("admin/listaUsuarios",{title:"Edición de usuario",users:users})
    }       
    
}

module.exports = controller