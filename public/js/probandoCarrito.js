window.addEventListener("load", function (event) {

    let probandoCarrito = document.querySelector(".probandoCarrito")
    let fila1Nombre = document.querySelector(".fila1-nombre")
    let fila1Precio = document.querySelector(".fila1-precio")
    let fila1Img = document.querySelector(".fila1-img")
    let local = JSON.parse(localStorage.getItem("platillos"))
    let tablaCarrito = document.querySelector(".tabla-carrito")
    let totalPrice = document.querySelector(".contenedor-total__price")
    let filaCarritoPrice = document.querySelector("#hola")
    let vaciarCarritoDelLS = document.getElementById('vaciar-carrito-del-LS'); //botón para vaciar carrito del LS
    
    if(localStorage.getItem('platillos') === null){
        console.log("locastorage vacío " + localStorage)
    }
    else{
        console.log("localstoraeg no está vacío " + localStorage)
        console.log("longitud del LS " + local.length)
        console.log(localStorage)
       
    }

    
    local.forEach(producto => {
        tablaCarrito.innerHTML +=
        `<tr class="filaCompleta-carrito" >` +
         `<td class="fila-carrito">` + `<img class="img-carrito" src=${producto.imagen} >` + "</img>" + "</td>" +
            `<td class="fila-carrito">` + producto.nombre + "</td>" +
            `<td class="fila-carrito">` + producto.cantidad + "</td>" +
            `<td id="hola" class="fila-carrito-price">` + "$" + producto.precio * producto.cantidad + "</td>" +
        "</tr>"
        console.log(producto.nombre)
        console.log(producto.cantidad)
        console.log(producto.precio)
        
        
    });

    vaciarCarritoDelLS.addEventListener("click",vaciarLocalStorage) 

    function vaciarLocalStorage(){
        localStorage.clear()
        console.log("localstorage vacío " + localStorage)
              } 
    
    // console.log(filaCarritoPrice)

    









})