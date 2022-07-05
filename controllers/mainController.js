const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')
const db = require("../database/models")
const sequelize = db.sequelize;

let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS


const controller = {
    index: (req, res) => {
        // let Promociones = products.filter(function (product) {
        //     return product.category == "Botas";
        // })
        // let Destacados = products.filter(function (product) {
        //     return product.category == "Destacados";
        // })
        // res.render("home", { Promociones: Promociones, Destacados: Destacados, title: "Shoe Market" })


      db.Product.findAll({ 
        include: [
            { association: "categorias" },
            { association: "productosTalles" },
            { association: "ordenes" },
            { association: "talles" }
        ],
        limit : 6,
        order : sequelize.random()

     }).then(function(productos){
        return res.render("home", { productos, title: "Shoe Market" })
     })





    },



    descripcion: (req, res) => { res.render('products/descripcion', { title: "Descripcion" }) },

    carrito: (req, res) => { res.render('products/carrito', { title: "Carrito de compras" }) },




    search: (req, res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let busqueda = []
        // let formu = req.query.search
        let formu = req.query.search.toLowerCase()

        products.forEach(product => {
            if (product.name.toLowerCase().includes(formu) || product.category.toLowerCase().includes(formu)) {
                busqueda.push(product)
            }
        });

        res.render("products/results", { busqueda: busqueda, title: "hola" })

    },
    detalle: (req, res) => {
        // let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        // let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let producto = products.find(product => product.id == req.params.id)
        // res.render("products/detalle", {
        //     producto: producto,
        //     title: "detalle del producto"

        // })
        db.Product.findByPk(req.params.id, {
            include: [
                { association: "categorias" },
                { association: "productosTalles" },
                { association: "ordenes" },
                { association: "talles" }
            ]
        })
        .then(function(producto){
            return res.render("products/detalle", {producto,title : "Detalle del producto"})
        })




    },
    contact: (req, res) => {

        res.render("contact", {
            title: "Contacto"
        })
    },
    processContact: (req, res) => {
        const pathLogContact = path.join(__dirname, "../logs/contact.json")
        const errors = validationResult(req)
        let old = req.body


        if (!errors.isEmpty()) {
            res.render("contact", { errors: errors.mapped(), old: old, title: "Contacto" })
        } else {
            let logForm = {
                name: req.body.name,
                email: req.body.email,
                mensaje: req.body.msg

            }
            let NewMsg = []
            const readContactJson = fs.readFileSync(pathLogContact)

            NewMsg = JSON.parse(readContactJson)
            NewMsg.push(logForm)

            fs.writeFileSync(pathLogContact, JSON.stringify(NewMsg, null, "\t"))



            res.redirect("/")
        }




    }



}

module.exports = controller

