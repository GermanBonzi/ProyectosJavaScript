
async function obtenerclientes(){
    const clientes = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Cliente obtenido');
        },3000);
    })

    // error o no
    const error = true;

    if(error==false){
        // el await detiene la ejecucion hasta que termine el promise
        const respuesta = await clientes;
        return respuesta;
    }

    else{
        await Promise.reject('HUBO UN ERROR');
    }
}

obtenerclientes()
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })