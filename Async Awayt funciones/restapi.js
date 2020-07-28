
const resultado = document.getElementById('resultado');



async function cargarapi(){
    //espera la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    // procede cuando la respuesta este hecha
    const datos = await respuesta.json();

    return datos;

}

cargarapi()
    .then(function(datos){
        let html1='';
        datos.forEach(function(data){
           html1+=` <li>${data.title}</li>`;     
        });
        resultado.innerHTML=html1;
    })
    .catch(function(error){
        console.log(error);
    })