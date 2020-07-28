

 //    CLASES SEGUROS E INTERFAZ



class Seguros{
    constructor(marca,anio,tiposeguro){
        this.marca=marca;
        this.anio=anio;
        this.tiposeguro=tiposeguro;
    }

    contizar(){
        /*
            1 = volkswagen va a costar 1.35
            2 = ford va a costar 1.15
            3 = fiat va a costar 1.05
        */
       let cantidad;
       const base =2000;
       switch(this.marca){
           case '1': {cantidad = base*1.35; break;}
           case '2': {cantidad = base*1.15; break;}
           case '3': {cantidad = base*1.05; break;}
       }
       

       // leer el año del auto
       const diferencia= max-this.anio;
       // cada año de diferencia, hay que reducir un 3% el costo del seguro
       cantidad -= ((diferencia*3)*cantidad)/100;
       

       /*
            Si el seguro es "BASICO" se multiplica por %30 
            Si el seguro es "COMPLETO" se multiplica por %50
        */
       if(this.tiposeguro=='basico'){
            cantidad *= 1.30;
       }
       else {
           cantidad *= 1.50;
       }
      return cantidad;
    }
}

// contiene todo lo que se muestra en el html
class Interfaz{
    constructor(){}

    mostrarMensaje(mensaje,tipo){
        const div = document.createElement('div');
        if (tipo==='error'){   
            div.classList.add('mensaje','error');
        }
        else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML=`${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));

        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        },3000);
    }


    // imprime el resultado de la cotizacion 
    mostrarResultado(seguro,total){
       const resultado=document.getElementById('resultado');
       let marca;
       switch(seguro.marca){
           case '1':{marca = 'Volkswagen'; break;}
           case '2':{marca ='Ford'; break;}
           case '3':{marca = 'Fiat'; break;}
       }
       //creamos un div para el html
       const div = document.createElement('div');
       // agregamos la informacion
       div.innerHTML=` 
            <p class='header'> Tu resumen:</p> 
            <p class='resumen'> Marca : ${marca}</p>
            <p class='resumen'> Año : ${seguro.anio}</p>
            <p class='resumen'> Tipo Seguro : ${seguro.tiposeguro}</p>
            <p class='resumen'> Precio total : $ ${total} </p>
       
       `;

       
     const spinner = document.querySelector('#cargando img');
     spinner.style.display='block';
     setTimeout(function(){
        spinner.style.display='none';
        resultado.appendChild(div);
     },3000);  

     

}


}




// EventListeners
const formulario=document.getElementById('cotizar-seguro');


formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //console.log('cotizar seguro');
    // leer la marca seleccionada del option marca
    const marca=document.getElementById('marca');
    const marcaseleccionada = marca.options[marca.selectedIndex].value;
    //console.log(marcaseleccionada); 

    //leer el año seleccionado del option anio
    const anio=document.getElementById('anio');
    const anioseleccionado= anio.options[anio.selectedIndex].value;
    //console.log(anioseleccionado);

    //leer el valor del radiobutton para el tipo de seguro
    const tipo=document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();

    //comprobar que los campos no esten vacios
    if((marcaseleccionada!='')&&(anioseleccionado!='')){

        // Limpiar resultados anteriores en la pantalla para que aparezca uno solo
        const resultados = document.querySelector('#resultado div');
        if(resultados != null){
            resultados.remove();
        }

        // instanciar seguro y mostrar interfaz
        console.log('correcto');
        const seguro = new Seguros(marcaseleccionada,anioseleccionado,tipo);

        //cotizar el seguro 
        const cantidad = seguro.contizar(seguro);
        
        // Mostrar el resultado en pantalla
        interfaz.mostrarResultado(seguro,cantidad);
        interfaz.mostrarMensaje('Cotizando....', 'Exito');
    
        
    }
    else{
        interfaz.mostrarMensaje('FALTAN DATOS, REVISA EL FORMULARIO');
    }



});


const max = new Date().getFullYear();
const min=max-20;
console.log(max);
console.log(min);


const selectAnios=document.getElementById('anio');

for(i=max ; i>=min ; i--){
    let option = document.createElement('option');
    option.value=i;
    option.innerHTML=i;
    selectAnios.appendChild(option);
}