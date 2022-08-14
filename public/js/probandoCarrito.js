window.addEventListener("load", function (event) {

    let probandoCarrito = document.querySelector(".probandoCarrito")
    let fila1Nombre = document.querySelector(".fila1-nombre")
    let fila1Precio = document.querySelector(".fila1-precio")
    let fila1Img = document.querySelector(".fila1-img")
    let local = JSON.parse(localStorage.getItem("platillos"))
    let tablaCarrito = document.querySelector(".tabla-carrito")
    let totalPrice = document.querySelector(".tr-total-price")
    console.log(local)


    local.forEach(producto => {
        console.log(producto.precio * producto.cantidad )
        tablaCarrito.innerHTML +=
        `<tr class="filaCompleta-carrito" >` +
         `<td class="fila-carrito">` + `<img class="img-carrito" src=${producto.imagen} >` + "</img>" + "</td>" +
            `<td class="fila-carrito">` + producto.nombre + "</td>" +
            `<td class="fila-carrito">` + producto.cantidad + "</td>" +
            `<td class="fila-carrito-price">` + "$" + producto.precio * producto.cantidad + "</td>" +
        "</tr>"
        
        
    });
    
    









})