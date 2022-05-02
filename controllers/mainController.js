const res = require("express/lib/response")

const controller = {
    index:(req,res) =>{return res.render("home")},

    register: (req,res) => {return res.render("registro")},

    login:(req,res) => {return res.render('login')},

    descripcion:(req,res) => {return res.render('descripcion')},

    carrito:(req,res) => {return res.render('carrito')},

    crearProducto: (req,res) => {return res.render('crearProducto')},

    editarProducto: (req,res) => {return res.render('editarProducto')}


}

module.exports = controller