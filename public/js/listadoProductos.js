window.addEventListener("DOMContentLoaded", function (event) {

    const listaProductos = document.querySelector('#main-home'); // home donde se muestra todos los productos
    const agregarCarrito = document.querySelectorAll(".agregarCarrito")
    const btns = document.querySelectorAll("button[data-id]")
    const cartP = document.querySelector(".cart-p")
    const cartPXl = document.querySelector(".cart-p-xl")

     
    if (localStorage.getItem('platillos') != null) {
        let localStorageProduct = JSON.parse(localStorage.getItem("platillos")) 
        let longitudLS = localStorageProduct.length               
        cartPXl.innerHTML =  longitudLS
   }

    btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.target.classList.remove("form__button")
            event.target.classList.add("hover-agregando")
            cartP.classList.remove("cart-none")                    
           cartPXl.classList.remove("cart-none") 
        })
        btn.addEventListener("mouseleave", (event) => {
            event.target.classList.add("form__button")
            event.target.classList.remove("hover-agregando")
        })


    })

    agregarCarrito.forEach(btnAgregarCarrito => {
        btnAgregarCarrito.addEventListener("click", cargarEventListeners)

    })

    function cargarEventListeners(event) {
        listaProductos.addEventListener("click", agregarProducto);
    }


    function agregarProducto(event) {
        //event.preventDefault();
        
        if (event.target.classList.contains('agregarCarrito')) {
            let producto = event.target.closest('.produc')//captura el contenedor padre
            //let producto = event.target.parentNode;//captura el contenedor padre
            // Enviamos el producto seleccionado para tomar sus datos
            const productId = producto.querySelector('.agregarCarrito').getAttribute('data-id') //id del producto seleccionado
            leerDatosProducto(productId);
        }
    }
    

    function leerDatosProducto(productId) {

        if (localStorage.getItem('platillos') === null) {

             const listProducts = []
             //fetch(`https://shoemarket.herokuapp.com/api/products/detail/${productId}`) //heroku
             fetch(`http://localhost:4000/api/products/detail/${productId}`)
                  .then((response) => response.json())
                  .then((data) => {
                       listProducts.push(data.product)
                       localStorage.setItem("platillos", JSON.stringify(listProducts))
                  })
                  .then(() =>{cartPXl.innerHTML = 1})

        } 
        else 
              {   let aux = 0 
                  let localStorageProduct = JSON.parse(localStorage.getItem("platillos")) 
                  
                
                  
                  for(let i=0; i<localStorageProduct.length; i++){
                       if(JSON.stringify(localStorageProduct[i].id) === productId){
                          JSON.stringify(localStorageProduct[i].quantity++)
                          //JSON.stringify(localStorageProduct[i].price)= JSON.stringify(localStorageProduct[i].price)*(JSON.stringify(localStorageProduct[i].quantity))
                          aux = 1
                        
                       }
                  }                                                                                                                                
                  if(aux === 1){
                       localStorage.setItem("platillos", JSON.stringify(localStorageProduct))
                       .then(()=>{ 
                        let localStorageProduct = JSON.parse(localStorage.getItem("platillos")) 
                        let longitudLS = localStorageProduct.length               
                        cartPXl.innerHTML =  longitudLS
                   })
                  }
                   
                  else{
                            //fetch(`https://shoemarket.herokuapp.com/api/products/detail/${productId}`) //heroku
                            fetch(`http://localhost:4000/api/products/detail/${productId}`)
                            .then((response) => response.json())
                            .then((data) => {
                            localStorageProduct.push(data.product)                                    
                            //localStorage.clear()
                            localStorage.setItem("platillos", JSON.stringify(localStorageProduct))
                            })
                            .then(()=>{ 
                                let localStorageProduct = JSON.parse(localStorage.getItem("platillos")) 
                                let longitudLS = localStorageProduct.length               
                                cartPXl.innerHTML =  longitudLS
                                })
                       }
             }          
             

   } //function leerDatosProducto(productId)  












})


