
// Leemos el formulario y los demas datos
const formulario= document.getElementById('formulario');
const moneda = document.getElementById('moneda');
const criptomoneda = document.getElementById('criptomoneda');


// INSTANCIAS DE CLASES
const cotizador = new API('b93318d9d95111f2da76bc752d2d24f32ca5ee0a416e53fa0cc0f0a424adec5a');
cotizador.obtenertodaslasmonedas();

const interfaz = new Interfaz();
interfaz.construirSelect();



// Listeners
formulario.addEventListener('submit',leerformulario);





function leerformulario(e){
    e.preventDefault();
    const monedaseleccionada = moneda.options[moneda.selectedIndex].value;
    const criptomonedaseleccionada = criptomoneda.options[criptomoneda.selectedIndex].value;
    
    // comprobar que ambos campos tengan algo seleccionado

    if((monedaseleccionada =='') || (criptomonedaseleccionada =='')){
        // arrojar un alert de error
        interfaz.mostrarmensaje('Ambos campos son Obligatorios','alert bg-danger text-center');
    }
    else{
        // todo funciona bien, consultar la api
        cotizador.obtenervalores(monedaseleccionada,criptomonedaseleccionada)
            .then(function(data){
                interfaz.resultadocotizacion(data.resultado.RAW, monedaseleccionada,criptomonedaseleccionada);
            })
    }
    
}