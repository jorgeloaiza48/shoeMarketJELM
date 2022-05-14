const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const controller = {
    index: (req, res) => { 
       
        res.render("home", { title: "Shoe Market" }) },

    register: (req, res) => { res.render("users/registro", { title: "Registro" }) },

    login: (req, res) => { res.render('users/login', { title: "Login" }) },

    descripcion: (req, res) => { res.render('products/descripcion', { title: "Descripcion" }) },

    carrito: (req, res) => { res.render('products/carrito', { title: "Carrito de compras" }) },

    crearProducto: (req, res) => { res.render('products/crearProducto', { title: "Crear Producto" }) },

    editarProducto: (req, res) => { res.render('products/editarProducto', { title: "Editar producto" }) },

    products: (req, res) => {
        //para estos 3 no se puede usar const ya que mas abajo cuando reescribamos los json hay q volver a declarar las variables
        // y las variables declaradas con const no se pueden modificar
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
            return product.category == "Gillerminas";
        })
        let giftCard = products.filter(function (product) {
            return product.category == "GiftCard";
        })
        res.render("products/productos", {
            products: products,
            botas: botas,
            texanas: texanas,
            bucaneras: bucaneras,
            borcegos: borcegos,
            guillerminas: guillerminas,
            title : "Productos",
            giftCard: giftCard
        })
    },
    detalle : (req,res) =>{
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        let producto = products.find(product => product.id == req.params.id)


        res.render("products/detalle", {
            producto : producto,
            title: "detalle del producto"

        })
    },
    newproduct: (req,res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')
        let ultimo = products.length - 1
		let idnuevo = products[ultimo].id + 1
        let prodForm = {
			id: idnuevo,
			name: req.body.name,
			price: req.body.price,
			category: req.body.discount,
			color: req.body.category,
			description: req.body.description,
			image: req.body.photo,
            size : "[35,36,37,38,39,40]"
        }

        let productoNuevo

        if(productJSON == ""){
            productoNuevo = ""
        }else{
            productoNuevo = JSON.parse(productJSON)
        }
          productoNuevo.push(prodForm)




    }


}

module.exports = controller

