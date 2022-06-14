const express = require("express")
const path = require("path")
const app = express()
const session = require("express-session")
const cookies = require("cookie-parser")
const mainRoutes = require('./routes/mainRoutes')
const userLoggedMiddleware = require("./middlewares/UserLoggedMiddleware")

const methodOverride =  require('method-override'); 
const publicPath = path.resolve(__dirname,'./public')
//Definiendo pueto y levantando servidor
let puerto = 4000
app.listen(process.env.PORT || puerto, ()=>console.log("Servidor corriendo en el puerto ---> " + puerto))

//permite capturar la información que se envía desde un formulario vía post en req.body
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));// Pasar poder usar los métodos PUT y DELETE

//Configurando EJS
app.set('view engine', 'ejs')
app.use(session({secret: " shhhh",
resave: false,
saveUninitialized: true}))

app.use(cookies())
app.use(userLoggedMiddleware)

//configuración para montar en Heroku
app.use(express.static(publicPath))
app.use('/',mainRoutes)