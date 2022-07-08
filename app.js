// ************ Require's ************/
const express = require("express")
const path = require("path")
const methodOverride =  require('method-override'); 
const cookies = require("cookie-parser")
const session = require("express-session")
const userLoggedMiddleware = require("./middlewares/UserLoggedMiddleware")
const adminLoggedMiddleware = require('./middlewares/AdminLoggedMiddleware');

const publicPath = path.resolve(__dirname,'./public')


/*** Main Router (require) */
const mainRoutes = require('./routes/mainRoutes')

// ************ Express() ************/
const app = express()


// ************  Middlewares ************/
app.use(session({secret: " shhhh",
resave: false,
saveUninitialized: true}))
app.use(express.static(publicPath))
app.use(cookies())
app.use(userLoggedMiddleware)
app.use(adminLoggedMiddleware);


//permite capturar la información que se envía desde un formulario vía post en req.body
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));// Pasar poder usar los métodos PUT y DELETE

//Configurando EJS
app.set('view engine', 'ejs')



/*** Main Router (use) */
app.use('/',mainRoutes)


/*** Error (404) */
// app.use((req, res, next)=>{
//     res.status(404).render('error404')
// });

//Definiendo pueto y levantando servidor
const puerto = 4000
app.listen(process.env.PORT || puerto, ()=>console.log("Servidor corriendo en el puerto ---> " + puerto))