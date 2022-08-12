window.addEventListener('load',function(event){

    let carrito = document.querySelector('#carrito'); //contenedor que está en el carrito
    let listaProductos = document.querySelector('.main-home'); // home donde se muestra todos los productos
    let contenedorCarrito = document.querySelector('#lista-carrito tbody'); //tabla en el carrito
    let vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //botón para vaciar carrito
    let articulosCarrito = [];

    // Listeners
    cargarEventListeners();

    function cargarEventListeners() {
        // Dispara cuando se presiona "Agregar Carrito"
        listaProductos.addEventListener('click', agregarCurso);
   
        // Cuando se elimina un curso del carrito
        carrito.addEventListener('click', eliminarCurso);
   
        // Al Vaciar el carrito
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
   
   }

   function agregarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const curso = e.target.parentElement.parentElement;
         // Enviamos el curso seleccionado para tomar sus datos
         leerDatosCurso(curso);
    }
        }

    // Lee los datos del curso
    function leerDatosCurso(curso) {
    let infoCurso = {
         imagen: curso.querySelector('img').src, //imagen del producto
         nombre: curso.querySelector('.nombre-del-producto p').textContent, //nombre del producto
         precio: curso.querySelector('.precio-del-producto p').textContent, //precio del producto
         id: curso.querySelector('a').getAttribute('data-id'), //id del producto seleccionado
         cantidad: 1
    }


    if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
         let cursos = articulosCarrito.map( curso => {
              if( curso.id === infoCurso.id ) {
                   curso.cantidad++;
                    return curso;
               } else {
                    return curso;
            }
         })
         articulosCarrito = [...cursos];
    }  else {
         articulosCarrito = [...articulosCarrito, infoCurso];
    }


    carritoHTML();
}
   




})//window.addEventListener