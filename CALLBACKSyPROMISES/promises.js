
//  PROMISES
/*
const esperando = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('se ejecuto');
    },5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
});
*/



 /*  LOS PROMISES LLEVAN SIEMPRE DOS PARAMTROS, EL RESOLVE Y EL REJECT
    EL RESOLVE SE EJECUTA CUANDO SE PUDO CUMPLIR LA PROMESA, Y EL REJECT
    ES CUANDO HAY UN ERROR.
    RESOLVE VA DE LA MANO DEL THEN Y REJECT VA CON CATCH PARA CAPUTRAR EL ERROR 
 */
const promesa = new Promise(function(resolve,reject){
    const descuento= false;
    if (descuento){
            resolve('descuento aplicado');

    }
    else{
            reject('error al aplicar el descuento')
    }
});

promesa.then(function(mensaje){
    console.log(mensaje);
}).catch(function(mensaje){
    console.log(mensaje);
})