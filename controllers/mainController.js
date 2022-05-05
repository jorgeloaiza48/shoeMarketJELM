

const controller = {
    index:(req,res) =>{res.render("home", {title: "Shoe Market"})},

    register: (req,res) => { res.render("registro", {title: "Registro"} )},

    login:(req,res) => {res.render('login',{title: "Login"})},

    descripcion:(req,res) => {res.render('descripcion',{title: "Descripcion"})},

    carrito:(req,res) => {res.render('carrito',{title: "Carrito de compras"})},

    crearProducto: (req,res) => {res.render('crearProducto',{title: "Crear Producto"})},

    editarProducto: (req,res) => {res.render('editarProducto',{title: "Editar producto"})}


}

module.exports = controller