window.onload = function () {
    let form = document.querySelector(".form-user-delete-forever")
    form.addEventListener("submit",function(event){
        event.preventDefault()
        Swal.fire({
            title: "¿Está seguro que quiere borrar permanentemente este usuario",
            text: "Tenga en cuenta que esta acción no se puede deshacer",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            confirmButtontext:"Si. Borrar",
            showCancelButton: true
          })
          .then((willDelete) => {
            if (willDelete.value) {
              this.submit()
            } 
          });
        
        })


}