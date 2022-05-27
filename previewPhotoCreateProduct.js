document.getElementById("foto-create").onchange = function(e) {
	let reader = new FileReader();
  
  reader.onload = function(){
    let preview = document.getElementById('preview'),
    		image = document.createElement('img');

    image.src = reader.result;
    
    preview.innerHTML = '';
    preview.append(image);
  };
 
  reader.readAsDataURL(e.target.files[0]);
}




// (function(){
//     function filePreview(input){
//         if(input.files && input.files[0]){
//             let reader = new FileReader()
//             reader.onload = function(e){
//                 $('#preview').html("<img src='"+ e.target.result +"' />")
//             }
//             reader.readAsDataURL(input.files[0])
//         }
//     }
//     $('#foto-create').change(function(){
//         filePreview(this)
//     })

// })();

// function archivo(evt) {
//     var files = evt.target.files; // FileList object

//     // Obtenemos la imagen del campo "file".
//     for (var i = 0, f; f = files[i]; i++) {
//       //Solo admitimos imágenes.
//       if (!f.type.match('image.*')) {
//           continue;
//       }

//       var reader = new FileReader();

//       reader.onload = (function(theFile) {
//           return function(e) {
//             // Insertamos la imagen
//            document.getElementById("preview").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', '"/>'].join('');
//           };
//       })(f);

//       reader.readAsDataURL(f);
//     }
// }

// document.getElementById('photo-create').addEventListener('change', archivo, false);