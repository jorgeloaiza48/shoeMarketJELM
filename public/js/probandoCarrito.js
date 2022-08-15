
window.addEventListener("DOMContentLoaded", function (event) {

    let probandoCarrito = document.querySelector(".probandoCarrito")
    let fila1Nombre = document.querySelector(".fila1-nombre")
    let fila1Precio = document.querySelector(".fila1-precio")
    let fila1Img = document.querySelector(".fila1-img")
    let local = JSON.parse(localStorage.getItem("platillos"))
    let tablaCarrito = document.querySelector(".tabla-carrito")
    let totalPrice = document.querySelector(".contenedor-total__price")
    let filaCarritoPrice = document.querySelector("#hola")
    let vaciarCarritoDelLS = document.getElementById('vaciar-carrito'); //botón para vaciar carrito del LS
    
    if(localStorage.getItem('platillos') === null){
        console.log("locastorage vacío " + localStorage)
    }
    else{
        console.log("localstoraeg no está vacío " + localStorage)
        console.log("longitud del LS " + local.length)
        console.log(localStorage)
       
    }
    let btnDeleteCarrito = document.querySelector("btn-delete-carrito")


    if (local) {

        local.forEach(producto => {
            tablaCarrito.innerHTML +=
                `<tr class="filaCompleta-carrito" >` +
                `<td class="fila-carrito">` + `<img class="img-carrito" src=${producto.imagen} >` + "</img>" + "</td>" +
                `<td class="fila-carrito">` + producto.nombre + "</td>" +
                `<td class="fila-carrito">` + producto.cantidad + "</td>" +
                `<td class="fila-carrito-price">` + "$" + producto.precio * producto.cantidad + "</td>" +
                `<td><a href="#" class="borrar-curso" data-id="${producto.id}">X</a> </td>`
            "</tr>"
            console.log(" Esta es la imagen " + producto.imagen)
            console.log(" Esta es el nombre " + producto.nombre)
            console.log(" Esta es la cantidad " + producto.cantidad)


        });
    } else {
        tablaCarrito.innerHTML +=
            `<tr class="filaCompleta-carrito" >` +
            `<td class="fila-carrito">` + "No hay productos en el carrito" + "</td>" +
            `<td class="fila-carrito">` +
            `<a href="/">` +
            `<button class="form__button">` + "Ir a Comprar" + "</button>"
            + `</a>` +
            "</td>" +
            "</tr>"

    }

    let td = document.querySelectorAll(".fila-carrito-price")
    let arrayPrecios = []
    let total = 0
    if (td) {
        td.forEach((producto) => {
            let precio = parseInt(producto.outerText.replace("$", "0"))
            total += precio
        })
    }
    
    totalPrice.innerHTML += "$ " + total


    vaciarCarritoDelLS.addEventListener('click',vaciarLocalStorage)

    function vaciarLocalStorage(){
                  localStorage.clear()
             }
        












})