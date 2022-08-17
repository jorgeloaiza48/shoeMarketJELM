window.addEventListener("DOMContentLoaded", function (event) {

    const listaProductos = document.querySelector('#main-home'); // home donde se muestra todos los productos
    const agregarCarrito = document.querySelectorAll(".agregarCarrito")
    const btns = document.querySelectorAll("button[data-id]")

    btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.target.classList.remove("form__button")
            event.target.classList.add("hover-agregando")
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
        event.preventDefault();
        // Delegation para agregar-carrito
        if (event.target.classList.contains('agregarCarrito')) {
            let curso = event.target.closest('.produc')//captura el contenedor padre
            //let curso = event.target.parentNode;//captura el contenedor padre
            // Enviamos el curso seleccionado para tomar sus datos
            const productId = curso.querySelector('.agregarCarrito').getAttribute('data-id') //id del producto seleccionado
            leerDatosProducto(productId);
        }
    }

    // Lee los datos del curso
    function leerDatosProducto(productId) {

        if (localStorage.getItem('platillos') === null) {
            const listProducts = []

            fetch(`https://shoemarket.herokuapp.com/api/products/detail/${productId}`)
                .then((response) => response.json())
                .then((data) => {
                    listProducts.push(data.product)
                    localStorage.setItem("platillos", JSON.stringify(listProducts))
                })

        } else {
            let localStoragePlat = JSON.parse(localStorage.getItem("platillos"))

            fetch(`https://shoemarket.herokuapp.com/api/products/detail/${productId}`)
                .then((response) => response.json())
                .then((data) => {

                    localStoragePlat.push(data.product)
                    localStorage.setItem("platillos", JSON.stringify(localStoragePlat))
                })


        }

    }













})


