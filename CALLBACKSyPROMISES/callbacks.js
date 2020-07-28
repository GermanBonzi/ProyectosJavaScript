


//   UN CALLBACK ES UNA FUNCION QUE SE EJECUTA DENTRO DE OTRA FUNCION
// POR EJEMPLO, EN UN FOREACH, SE EJECUTA UNA FUNCION PARA IMPRIMIR LAS CIUDADES DEL ARRAY

//const ciudades =['La Plata','Tala','Concepcion del Uruguay','Nogoya','Macia'];


// inline callback, ya que es una funcion anonima que se ejecuta dentro del foreach
//ciudades.forEach(function(ciudad){
  //  console.log(ciudad);
//})


// con la funcion definida, seria asi

/*function callback(ciudad){
    console.log(ciudad);

}

ciudades.forEach(callback);  */


//  LISTADO DE PAISES
const paises =['FRANCIA','ARGENTINA','BRASIL','ESPAÑA','MEXICO'];

// se agrega un nuevo pais desp de 3 segundos

function nuevopais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    },2000);
}


// los paises se muestran despues de 2 segundos, por eso el timeout
function mostrarpaises(){
    setTimeout(function(){
        let html='';
        paises.forEach(function(pais){
            html +=` <h2> ${pais} </h2>`
        });

        document.getElementById('paises').innerHTML=html;

    },1000);
}

mostrarpaises();
nuevopais('INGLATERRA',mostrarpaises);



