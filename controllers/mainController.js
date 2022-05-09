

const controller = {
    index:(req,res) =>{res.render("home", {title: "Shoe Market"})},

    register: (req,res) => { res.render("users/registro", {title: "Registro"} )},

    login:(req,res) => {res.render('users/login',{title: "Login"})},

    descripcion:(req,res) => {res.render('products/descripcion',{title: "Descripcion"})},

    carrito:(req,res) => {res.render('products/carrito',{title: "Carrito de compras"})},

    crearProducto: (req,res) => {res.render('products/crearProducto',{title: "Crear Producto"})},

    editarProducto: (req,res) => {res.render('products/editarProducto',{title: "Editar producto"})}


}

module.exports = controller