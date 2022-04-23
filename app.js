const express = require("express")
const path = require("path")
const app = express()

let puerto = 4000
app.listen(process.env.PORT || puerto, ()=>console.log("Servidor corriendo en el puerto ---> " + puerto))

//configuración para montar en Heroku

// const publicPath = path.resolve(__dirname,'./public')
// app.use(express.static(publicPath))

app.use(express.static("public"));

// app.use("/static",express.static(__dirname,))

app.get("/",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/carritodecompras",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/carritodecompras.html"))
})

app.get("/login",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.get("/Registro",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/registro.html"))
})

app.get("/descripciondelproducto",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/descripciondelproducto.html"))
})

