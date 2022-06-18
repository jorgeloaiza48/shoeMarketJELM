const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')

let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS


const controller = {
    index: (req, res) => {
        let Promociones = products.filter(function (product) {
            return product.category == "Botas";
        })
        let Destacados = products.filter(function (product) {
            return product.category == "Destacados";
        })
        res.render("home", { Promociones: Promociones, Destacados: Destacados, title: "Shoe Market" })
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
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
       

        let producto = products.find(product => product.id == req.params.id)


        res.render("products/detalle", {
            producto: producto,
            title: "detalle del producto"

        })
    },
     


}

module.exports = controller

