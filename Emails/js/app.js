// VARIABLES

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const botonEnviar=document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-email');
const botonReset = document.getElementById('resetBtn');






// EVENTOS LISTENERS
eventlisteners();

function eventlisteners(){
// inicio de la aplicacion y deshabilitamos el boton enviar hasta que se llenen los campos
    document.addEventListener('DOMContentLoaded', inicioApp);

    // campos del formulario
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);

    // boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    // boton de reset para resetear los campos del formulario
    botonReset.addEventListener('click',resetFormulario);
    
}








//FUNCIONES

function inicioApp(){
    //deshabilitar el envio
    botonEnviar.disabled = true;
}



// valida los campos del formulario, que el campo tenga algo escrito
function validarCampo(){
    
    //funcion que valida la longitud del texto y q no sea vacio
    // this contiene el campo actual del formulario
    validarLongitud(this);

    //validar unicamente el email, que tenga el formato @
    if(this.type=='email'){
        validarEmail(this)
    }

    let errores;

    errores = document.querySelectorAll('.error');

    if((email.value!='')&&(asunto.value!='')&&(mensaje.value!='')){
        if(errores.length==0){

            botonEnviar.disabled=false;

        }
       
    }
}
 
// Resetear el formulario 
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

// enviar el correo
function enviarEmail(e){
    
    // spinner al presionar enviar
    const spinner=document.querySelector('#spinner');
    spinner.style.display='block';

    // gif que se envia el email
    const enviado = document.createElement("img");
    enviado.src="img/mail.gif";
    enviado.style.display='block';

    // ocultar spinner y mostrar el gif de email enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild( enviado );

        setTimeout(function() {
             enviado.remove();
             formularioEnviar.reset();
        }, 5000);
   }, 3000);

   e.preventDefault();

}


// verifica la longitud del texto en los campos del formulario
function validarLongitud(campo){

    if(campo.value.length>0){
        campo.style.borderBottomColor = 'green';
        // si el campo esta correcto, se elimina del dom la calse error
        campo.classList.remove('error');
    }

    else{
        campo.style.borderBottomColor = 'red';
        //si el campo esta incorrecto se agrega al dom la clase error
        campo.classList.add('error');

    }
}

 

function validarEmail(campo){
    const mensaje=campo.value;
    if(mensaje.indexOf('@') != -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }

    else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

