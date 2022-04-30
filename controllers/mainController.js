const res = require("express/lib/response")

const controller = {
    index:(req,res) =>{return res.render('home')},

    register: (req,res) => {return res.render('registro')},

    login:(req,res) => {return res.render('login')},

    descripcion:(req,res) => {return res.render('descripcion')},

    carrito:(req,res) => {return res.render('carrito')
}

}

module.exports = controller