window.addEventListener("load", function (event) {

let carrito = document.getElementById("carrito"); //contenedor que está en el carrito
let listaProductos = document.querySelector('#main-home'); // home donde se muestra todos los productos
let contenedorCarrito = document.querySelector('#lista-carrito tbody'); //tabla en el carrito
let vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //botón para vaciar carrito
let agregarCarrito =  document.querySelectorAll(".agregarCarrito")
let articulosCarrito = [];

agregarCarrito.forEach(btnAgregarCarrito => {
     btnAgregarCarrito.addEventListener("click", agregarProducto )
         
          // if(event.target.classList.contains('agregarCarrito')) {
          //      let curso = event.target.parentNode;
          //      //  console.log(curso.childNodes)
          //           let infoCurso = {
          //               imagen: curso.querySelector('img').src, //imagen del producto
          //               nombre: curso.querySelector('.name').textContent, //nombre del producto
          //               precio: curso.querySelector('.price').textContent, //precio del producto
          //               id:     curso.querySelector('.agregarCarrito').getAttribute('data-id'), //id del producto seleccionado
          //               cantidad: 1
          //          }
          //          // console.log(infoCurso)
          //          if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          //                    let cursos = articulosCarrito.map( curso => {
          //                         if( curso.id === infoCurso.id ) {
          //                              curso.cantidad++;
          //                               return curso;
          //                          } 
          //                          else {
          //                               return curso;
          //                          }
          //                    })
          //                    articulosCarrito = [...cursos];
          //               }  else {
          //                    articulosCarrito = [...articulosCarrito, infoCurso];
          //               }
                    
                        
                       
          //               articulosCarrito.forEach(curso => {
          //                               let row = document.createElement('tr');
          //                               row.innerHTML =  `
          //                                    <td><img src="${curso.imagen}" width=100></td>
          //                                    <td>${curso.nombre}</td>
          //                                    <td>${curso.precio}</td>
          //                                    <td>${curso.cantidad}</td>
          //                                    <td> <a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>;`
          //                                    console.log(articulosCarrito.length)
          //                                console.log(row.innerHTML)
          //                                contenedorCarrito.appendChild(row);
                                       
          //                          });
               
          //      }              
          

 
          




    })
//})



    // Listeners
//     cargarEventListeners();

//     function cargarEventListeners(event) {
//         // Dispara cuando se presiona "Agregar Carrito"
//           //listaProductos.addEventListener("click", agregarProducto);
//            agregarCarrito.addEventListener("click",agregarProducto());
   
//         // Cuando se elimina un curso del carrito
//         carrito.addEventListener("click", eliminarProducto());
   
//         // Al Vaciar el carrito
//         vaciarCarritoBtn.addEventListener("click", vaciarCarrito());
   
//    }

   function agregarProducto(event) {
    //event.preventDefault();
    
    // Delegation para agregar-carrito
    if(event.target.classList.contains('agregarCarrito')) {
          let curso = event.target.closest('.produc')//captura el contenedor padre
         //let curso = event.target.parentNode;//captura el contenedor padre
         // Enviamos el curso seleccionado para tomar sus datos
         leerDatosProducto(curso);
    }
        }

    // Lee los datos del curso
    function leerDatosProducto(curso) {
     let infoCurso = {
          imagen: curso.querySelector('img').src, //imagen del producto
          nombre: curso.querySelector('.name').textContent, //nombre del producto
          precio: curso.querySelector('.price').textContent, //precio del producto
          id:     curso.querySelector('.agregarCarrito').getAttribute('data-id'), //id del producto seleccionado
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
   
//      // Elimina el curso del carrito en el DOM
     function eliminarCurso(event) {
          //event.preventDefault();
          if(event.target.classList.contains('borrar-curso') ) {
               // e.target.parentElement.parentElement.remove();
               let cursoId = event.target.getAttribute('data-id')
          
               // Eliminar del arreglo del carrito
               articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
 
               carritoHTML();
          }
     }

//      // Muestra el curso seleccionado en el Carrito
     function carritoHTML() {

          //vaciarCarrito();
 
          articulosCarrito.forEach(curso => {
               let row = document.createElement('tr');
               row.innerHTML =  `
                    <td> <img src="${curso.imagen}" width=100> </td>
                    <td>${curso.nombre}</td>
                    <td>${curso.precio}</td>
                    <td>${curso.cantidad} </td>
                    <td>
                         <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
                    </td>
                    `;
                    console.log(articulosCarrito.length)
                    console.log(row.innerHTML)
               contenedorCarrito.appendChild(row);
          });
 
     }

//      // Elimina los productos del carrito en el DOM
          function vaciarCarrito(event) {
          // forma lenta
          // contenedorCarrito.innerHTML = '';
 
 
          // forma rapida (recomendada)
          while(contenedorCarrito.firstChild) {
               contenedorCarrito.removeChild(contenedorCarrito.firstChild);
          }
 }
 
})
