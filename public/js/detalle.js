window.addEventListener("DOMContentLoaded", function (event) {
    
    let agregarCarrito = document.querySelector(".agregar-carrito")
    const productId = agregarCarrito.getAttribute('data-id') //id del producto seleccionado

   
        agregarCarrito.addEventListener("click", (event) => {
            event.target.classList.remove("form__button")
            event.target.classList.remove("btn-detail-view")
            event.target.classList.add("hover-agregando-detail")
            cargarAlCarrito(productId)
         })
         agregarCarrito.addEventListener("mouseleave", (event) => {
              event.target.classList.add("form__button")
              event.target.classList.add("btn-detail-view")
              event.target.classList.remove("hover-agregando-detail")
         })
 
 
        })


     function  cargarAlCarrito(productId) {
         
         if(localStorage.getItem('platillos') === null){
              const listProducts = []

              fetch(`https://shoemarket.herokuapp.com/api/products/detail/${productId}`)
              .then((response)=> response.json())
              .then((data) => {
                   listProducts.push(data.product)
                   localStorage.setItem("platillos",JSON.stringify(listProducts))
              })
              
         } else {
             let localStoragePlat = JSON.parse(localStorage.getItem("platillos")) 

             fetch(`https://shoemarket.herokuapp.com/api/products/detail/${productId}`)
              .then((response)=> response.json())
              .then((data) => {

                   localStoragePlat.push(data.product)
                   localStorage.setItem("platillos",JSON.stringify(localStoragePlat))
              })


         }
         
    }
    
 




    // function cargarEventListeners(event) {
    //           listaProductos.addEventListener("click", agregarProducto);                          
                        
    //         }


    // function agregarProducto(event) {
    //      event.preventDefault();
    //      // Delegation para agregar-carrito
    //      if (event.target.classList.contains('agregarCarrito')) {
    //           let curso = event.target.closest('.produc')//captura el contenedor padre
    //           //let curso = event.target.parentNode;//captura el contenedor padre
    //           // Enviamos el curso seleccionado para tomar sus datos
    //           const productId = curso.querySelector('.agregarCarrito').getAttribute('data-id') //id del producto seleccionado
    //           leerDatosProducto(productId);
    //      }
    // }

    // Lee los datos del curso
