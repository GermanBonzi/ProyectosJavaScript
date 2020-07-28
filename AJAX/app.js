

document.getElementById('cargar').addEventListener('click',cargardatos);

function cargardatos (){

    //creamos el objeto xmlhttp request
    const xhr = new XMLHttpRequest();

    // luego abrimos una conexion 
    xhr.open('GET','datos.txt',true);

    // una vez que carga
    xhr.onload = function(){
        // status --->  el 200: todo correcto, el 403: prohibido, el 404: error, no encontrado
       if(this.status==200){
           //mostramos en el html el texto extraido del archivo txt
           document.getElementById('listado').innerHTML=`<h1>${this.responseText} </h1>`; 

       }
    }

    // enviamos el request
    xhr.send();




}