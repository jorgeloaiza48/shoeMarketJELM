window.addEventListener("load", function (event) {
    
     let listaProductos = document.querySelector('#main-home'); // home donde se muestra todos los productos
     let contenedorCarrito = document.querySelector('#lista-carrito tbody'); //tabla en el carrito
     let vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //botón para vaciar carrito
     let vaciarCarritoDelLS = document.getElementById('vaciar-carrito-del-LS'); //botón para vaciar carrito del LS
     let agregarCarrito = document.querySelectorAll(".agregarCarrito")
     let  carrito = document.querySelector("#carrito"); //contenedor que está en el carrito
     let articulosCarrito = [];
     let btnCarritoHeader = document.querySelector(".boton-carrito")
     let containerCarrito = document.querySelector(".containerCarrito")
     let prodAgregado = document.querySelector(".prodAgregado")
     let  platillos = document.getElementById('lista-platillos')

     //     btnCarritoHeader.addEventListener("mouseover",function(){
     //      carrito.classList.add("show")
     //      carrito.classList.remove("none")
     //       })
     //     carrito.addEventListener("mouseleave",function(){
     //      carrito.classList.remove("show")
     //      carrito.classList.add("none")
     //       })
       //sdfsfsfsdf        

     agregarCarrito.forEach(btnAgregarCarrito => {
          btnAgregarCarrito.addEventListener("click",cargarEventListeners)
     })

     function cargarEventListeners(event) {
               alert("Producto Agregado")     
               listaProductos.addEventListener("click", agregarProducto);                          
               // Cuando se elimina un curso del carrito
               carrito.addEventListener("click", eliminarProducto);
               // Al Vaciar el carrito
               vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
             
             }


     function agregarProducto(event) {
          event.preventDefault();

          // Delegation para agregar-carrito
          if (event.target.classList.contains('agregarCarrito')) {
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
               id: curso.querySelector('.agregarCarrito').getAttribute('data-id'), //id del producto seleccionado
               cantidad: 1
          }


          if (articulosCarrito.some(curso => curso.id === infoCurso.id)) {
               let cursos = articulosCarrito.map(curso => {
                    if (curso.id === infoCurso.id) {
                         curso.cantidad++;
                         return curso;
                    } else {
                         return curso;
                    }
               })
               articulosCarrito = [...cursos];
          } else {
               articulosCarrito = [...articulosCarrito, infoCurso];
          }

          carritoHTML();

          if(localStorage.getItem('platillos') === null){
               localStorage.setItem('platillos', JSON.stringify(articulosCarrito))//guarda los productos en el LocalStorage
               
          }
          else{
               let platillosLS = [];
               platillosLS = JSON.parse(localStorage.getItem("platillos"));               
               platillosLS.push(articulosCarrito)
               localStorage.setItem('platillos', JSON.stringify(platillosLS))//guarda los productos en el LocalStorage               
          }
          //localStorage.setItem('platillos', JSON.stringify(articulosCarrito))//guarda los productos en el LocalStorage
          //guardarPlatilloLocalStorage(articulosCarrito)
     }
     
    
     function guardarPlatilloLocalStorage(platillo){
                    let platillos;
                    platillos = obtenerPlatillosLocalStorage();
                    platillos.push(platillo);          
                    localStorage.setItem('platillos',JSON.stringify(platillos));
               }   
                
 
     function obtenerPlatillosLocalStorage(){
                    let platillosLS;
                    if(localStorage.getItem('platillos') === null){
                         platillosLS = [];
                    }
                    else{
                         platillosLS = JSON.parse(localStorage.getItem("platillos"));
                    }                   
                    return platillosLS;
               }    

                    //      // Elimina el curso del carrito en el DOM
     function eliminarProducto(event) {
          //event.preventDefault();
          if (event.target.classList.contains('borrar-curso')) {
               event.target.parentNode.remove();
               let cursoId = event.target.getAttribute('data-id')

               // Eliminar del arreglo del carrito
               articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
               //alert("producto eliminado")
               carritoHTML();
          }
     }

     //      // Muestra el curso seleccionado en el Carrito
     function carritoHTML() {

          vaciarCarrito();

          articulosCarrito.forEach(curso => {
               let row = document.createElement('tr');
               let rowaux = document.createElement('tr');//esta fila es para que de espacio entre las filas
               row.innerHTML = `
                    <td> <img src="${curso.imagen}" width=100> </td>
                    <td>${curso.nombre}</td>
                    <td>${curso.precio}</td>
                    <td>${curso.cantidad} </td>
                    <td>
                         <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
                    </td>
                    `;
               rowaux.innerHTML =`<td class="espacio"></td> 
                                   <td class="espacio"></td>
                                   <td class="espacio"></td>
                                   <td class="espacio"></td>
                                   <td class="espacio"></td> `
               contenedorCarrito.appendChild(row);
               contenedorCarrito.appendChild(rowaux);
          });

     }

     //      // Elimina los productos del carrito en el DOM
     function vaciarCarrito(event) {
          // forma lenta
          // contenedorCarrito.innerHTML = '';


          // forma rapida (recomendada)
          while (contenedorCarrito.firstChild) {
               contenedorCarrito.removeChild(contenedorCarrito.firstChild);
          }
     }


     




  })


// **********************************************

// window.addEventListener("load", function (event) {


//      let  carrito = document.querySelector("#carrito"); //contenedor que está en el carrito
//      const  platillos = document.getElementById('lista-platillos')
//      const  listaPlatillos = document.querySelector('#lista-carrito tbody'); //tabla en el carrito
//      const  vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //botón para vaciar carrito
//      let agregarCarrito = document.querySelectorAll(".agregarCarrito")


//      agregarCarrito.forEach(btnAgregarCarrito => {
//           btnAgregarCarrito.addEventListener("click",cargarEventListener)
//      })
     

//      function cargarEventListener() {          
//           platillos.addEventListener('click', comprarPlatillo);
//           carrito.addEventListener('click', eliminarPlatillo);
//           vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
//           document.addEventListener('DOMContentLoaded', leerLocalStorage);
//      }

//      function comprarPlatillo(e) {
//           e.preventDefault();
//           if (e.target.classList.contains('agregar-carrito')) {
//                let platillo = e.target.parentNode;//probar con parentNode;
//                leerDatosPlatillo(platillo);
//           }
//      }

//      function leerDatosPlatillo(platillo) {
//           let infoPlatillo = {
//                imagen: curso.querySelector('img').src, //imagen del producto
//                nombre: curso.querySelector('.name').textContent, //nombre del producto
//                precio: curso.querySelector('.price').textContent, //precio del producto
//                id: curso.querySelector('.agregarCarrito').getAttribute('data-id'), //id del producto seleccionado
//                cantidad: 1
//           }
//           insertarCarrito(infoPlatillo);
//      }

//      function insertarCarrito(platillo) {
//           let row = document.createElement('tr');
//           row.innerHTML = `
//                <td><img src="${platillo.imagen}" width=100></td>
//                <td>${platillo.nombre}</td>
//                <td>${platillo.precio}</td>
//                <td>${platillo.cantidad}</td>
//                <td> <a href="#" class="borrar-curso" data-id="${platillo.id}">X</a></td>`;
//           listaPlatillos.appendChild(row);
//           guardarPlatilloLocalStorage(platillo);
//      }

//      function eliminarPlatillo(e) {
//           e.preventDefault();
//           let platillo, platilloId;

//           if (e.target.calssList.contains('borrar-platillo')) {
//                e.target.parentNode.remove();
//                platillo = e.target.parentNode;
//                platilloId = platillo.querySelector('a').getAttribute('data-id');
//           }
//           eliminarPlatilloLocalStorage(platilloId)
//      }

//      function vaciarCarrito(){
//           while(listaPlatillos.firstChild){
//                listaPlatillos.removeChild(listaPlatillos.firstChild);
//           }
//           vaciarLocalStorage();

//           return false;
//      }

//      function guardarPlatilloLocalStorage(platillo){
//           let platillos;
//           platillos = obtenerPlatillosLocalStorage();
//           platillos.push(platillo);

//           localStorage.setItem('platillos',JSON.stringify(platillos));
//      }

//      function obtenerPlatillosLocalStorage(){
//           let platillosLS;
//           if(localStorage.getItem('platillos') === null){
//                platillosLS = [];
//           }
//           else{
//                platillosLS = JSON.parse(localStorage.getItem('platillos'));
//           }
//           return platillosLS;
//      }

//      function leerLocalStorage(){
//           let platillosLS;
//           platillosLS = obtenerPlatillosLocalStorage();
//           platillosLS.forEach(function(platillo){
//                const row = document.createElement('tr');
//                row.innerHTML = `
//                <td><img src="${platillo.imagen}" width=100 </td>
//                <td>${platillo.nombre}</td>
//                <td>${platillo.precio}</td>              
//                <td> <a href="#" class="borrar-platillo" data-id="${platillo.id}">X</a></td>
//                `;
//                listaPlatillos.appendChild(row);
//           })
//      }

//      function eliminarPlatilloLocalStorage(platillo){
//           let platillosLS;
//           platillosLS = obtenerPlatillosLocalStorage();

//           platillosLS.forEach(function(platilloLS,index){
//                if(platilloLS.id === platillo){
//                    platillosLS.splice(index,1); 
//                }
//           });

//           localStorage.setItem('platillos', JSON.stringify(platillosLS));

//      }

//      function vaciarLocalStorage(){
//           localStorage.clear()
//      }


// })

