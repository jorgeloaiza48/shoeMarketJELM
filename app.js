const express = require("express")
const path = require("path")
const app = express()
const methodOverride =  require('method-override'); 
app.use(methodOverride('_method'));// Pasar poder usar los métodos PUT y DELETE
//permite capturar la información que se envía desde un formulario vía post en req.body
app.use(express.urlencoded({extended:false}))

//Configurando EJS
app.set('view engine', 'ejs')

//Definiendo pueto y levantando servidor
let puerto = 4000
app.listen(process.env.PORT || puerto, ()=>console.log("Servidor corriendo en el puerto ---> " + puerto))

//configuración para montar en Heroku
const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath))

const mainRoutes = require('./routes/mainRoutes')
app.use('/',mainRoutes)


 // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// app.use(express.static("public"));
// app.use("/static",express.static(__dirname,))

// app.get("/",(req, res) =>{
//     res.sendFile(path.join(__dirname,"/views/home.html"))
// })


// app.get('/carrito',(req, res) =>{
//     res.sendFile(path.resolve(__dirname,'./views/carrito.html'))
// })

// app.get("/login",(req, res) =>{
//     res.sendFile(path.join(__dirname,"/views/logIn.html"))
// })

// app.get("/registro",(req, res) =>{
//     res.sendFile(path.join(__dirname,"/views/Registro.html"))
// })

// app.get('/descripciondelproducto',(req, res) =>{
//     res.sendFile(path.resolve(__dirname,'./views/descripcion.html'))
// })
