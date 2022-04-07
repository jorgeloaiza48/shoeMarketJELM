const express = require("express")
const path = require("path")
const app = express()
app.listen(4000,()=>console.log("servidor corriendo en 4000"))

app.use(express.static("public"));

// app.use("/static",express.static(__dirname,))

app.get ("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"))

})

app.get ("/carritodecompras",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/CarritoDeCompras.html"))
})

app.get ("/login",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.get ("/registro",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Registro.html"))
})

app.get ("/descripciondelproducto",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/DescripcionDelProducto.html"))
})

