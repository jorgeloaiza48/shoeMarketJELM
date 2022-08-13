window.addEventListener("load", function (event) {

     let carrito = document.getElementById("carrito"); //contenedor que está en el carrito
     let platillos = document.getElementById('lista-platillos')
     let listaPlatillos = document.querySelector('#lista-carrito tbody'); //tabla en el carrito
     let vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //botón para vaciar carrito

     cargarEventListener();

     function cargarEventListener() {

          platillos.addEventListener('click', comprarPlatillo);
          carrito.addEventListener('click', eliminarPlatillo);
          vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
          document.addEventListener('DOMContentLoaded', leerLocalStorage);
     }

     function comprarPlatillo(e) {
          e.preventDefault();
          if (e.target.calssList.contains('agregar-carrito')) {
               let platillo = e.target.parentNode;//probar con parentNode;
               leerDatosPlatillo(platillo);
          }
     }

     function leerDatosPlatillo(platillo) {
          let infoPlatillo = {
               imagen: curso.querySelector('img').src, //imagen del producto
               nombre: curso.querySelector('.name').textContent, //nombre del producto
               precio: curso.querySelector('.price').textContent, //precio del producto
               id: curso.querySelector('.agregarCarrito').getAttribute('data-id'), //id del producto seleccionado
               cantidad: 1
          }
          insertarCarrito(infoPlatillo);
     }

     function insertarCarrito(platillo) {
          let row = document.createElement('tr');
          row.innerHTML = `
               <td><img src="${platillo.imagen}" width=100></td>
               <td>${platillo.nombre}</td>
               <td>${platillo.precio}</td>
               <td>${platillo.cantidad}</td>
               <td> <a href="#" class="borrar-curso" data-id="${platillo.id}">X</a></td>`;
          listaPlatillos.appendChild(row);
          guardarPlatilloLocalStorage(platillo);
     }

     function eliminarPlatillo(e) {
          e.preventDefault();
          let platillo, platilloId;

          if (e.target.calssList.contains('borrar-platillo')) {
               e.target.parentNode.remove();
               platillo = e.target.parentNode;
               platilloId = platillo.querySelector('a').getAttribute('data-id');
          }
          eliminarPlatilloLocalStorage(platilloId)
     }

     function vaciarCarrito(){
          while(listaPlatillos.firstChild){
               listaPlatillos.removeChild(listaPlatillos.firstChild);
          }
          vaciarLocalStorage();

          return false;
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
               platillosLS = JSON.parse(localStorage.getItem('platillos'));
          }
          return platillosLS;
     }

     function leerLocalStorage(){
          let platillosLS;
          platillosLS = obtenerPlatillosLocalStorage();
          platillosLS.forEach(function(platillo){
               const row = document.createElement('tr');
               row.innerHTML = `
               <td><img src="${platillo.imagen}" width=100 </td>
               <td>${platillo.nombre}</td>
               <td>${platillo.precio}</td>              
               <td> <a href="#" class="borrar-platillo" data-id="${platillo.id}">X</a></td>
               `;
               listaPlatillos.appendChild(row);
          })
     }

     function eliminarPlatilloLocalStorage(platillo){
          let platillosLS;
          platillosLS = obtenerPlatillosLocalStorage();

          platillosLS.forEach(function(platilloLS,index){
               if(platilloLS.id === platillo){
                   platillosLS.splice(index,1); 
               }
          });

          localStorage.setItem('platillos', JSON.stringify(platillosLS));

     }

     function vaciarLocalStorage(){
          localStorage.clear()
     }


})
