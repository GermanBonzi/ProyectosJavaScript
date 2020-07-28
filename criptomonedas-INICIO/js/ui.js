


class Interfaz{

   /* constructor(){
        this.init();
    }

    init(){
        this.construirSelect();
    }*/

    construirSelect(){
        cotizador.obtenertodaslasmonedas()
            .then(function(monedas){
               
                // creo un select de opciones tomando el id del html
                // dentro del for , agregamos los elementos al select
                const select = document.querySelector('#criptomoneda');
                // OBJECT ENTRIES SE UTILIZA PARA RECORRER ARREGLO DE OBJETOS
                for(const [llave,valor] of Object.entries(monedas.monedas.Data)){
                    // añadimos el symbol y el coinname como simbolo y nombres al select
                    const opcion = document.createElement('option');
                    opcion.value = valor.Symbol;
                    opcion.appendChild(document.createTextNode(valor.CoinName));
                    select.appendChild(opcion);
                }
            })
    }
    
    mostrarmensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className=clases;
        div.appendChild(document.createTextNode(mensaje));
        
        // seleccionar mensajes
        const divmensaje=document.querySelector('.mensajes');
        divmensaje.appendChild(div);

        //mostrar contenido
        setTimeout(function(){
            divmensaje.remove();
        },3000);
    }


    // imprimir el resultado de la cotizacion

     resultadocotizacion(resultado,moneda,criptomoneda){
        const datosmoneda = resultado[criptomoneda][moneda];
        
        // elimina las cotizaciones que ya estan hechas 
        const resultadoanterior = document.querySelector('#resultado > div');
        if(resultadoanterior){
            resultadoanterior.remove();
        }
        // recortar la cantidad de digitos del precio y de variacion de porcentaje
        let precio = datosmoneda.PRICE.toFixed(2);
        let variacion= datosmoneda.CHANGEPCTDAY.toFixed(2);
        //actualizar fecha
        let actualizado= new Date(datosmoneda.LASTUPDATE*1000).toLocaleDateString('es-AR');


        // construir el template
        let html=`
                    <div class="Card bg-warning">
                        <div class="card-body" text-light>
                            <h2 class="card-title"> Rsultado: </h2>
                            <p> El precio de: ${datosmoneda.FROMSYMBOL} a moneda 
                             ${datosmoneda.TOSYMBOL}  Es de $: ${precio}</p>

                             <p>Variacion ultimo dia: %  ${variacion}</p>
                             <p>Ultima actualizacion:  ${actualizado}</p>



                        </div>
                    </div>
                `;


            setTimeout(function(){
                document.querySelector('#resultado').innerHTML=html;

            },1200);


           
         
        
    }

   
}