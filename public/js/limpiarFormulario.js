window.addEventListener('load',function () {
    let boton_limpiar_form = document.querySelector("#boton-limpiar-form")
    let register_form = document.querySelector('.form-Reg')
    let preview = document.getElementById('preview')

    boton_limpiar_form.addEventListener("click",function(event){
        event.preventDefault()
        preview.innerHTML = '' //oculta la foto de perfil
        register_form.reset() //limpia todos los campos del formulario               
        })


})