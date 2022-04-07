const express = require("express")
const path = require("path")
const app = express()
app.listen(4000,()=>console.log("servidor corriendo en 4000"))

app.use(express.static("public"));

// app.use("/static",express.static(__dirname,))

app.get ("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))

})

app.get ("/carritodecompras",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get ("/login",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get ("/registro",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get ("/descripciondelproducto",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

