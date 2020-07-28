


const botontxt = document.getElementById('txtBtn');
const botonjson= document.getElementById('jsonBtn');
const cargarApi = document.getElementById('apiBTN');

const resultado = document.getElementById('resultado');


//listeners
botontxt.addEventListener('click',cargartxt);

botonjson.addEventListener('click',cargarjson);

cargarApi.addEventListener('click',cargardatosapi);














function cargartxt(){
 // USUALMENTE REQUIERE DOS THEN, EL PRIMERO PARA CONECTARSE Y EL SEGUNDO PARA TRAER LOS DATOS
    fetch('datos.txt').then(function(respuesta){
        // aca le indicamos a fetch como queremos los datos, si texto , json, etc
        const res = respuesta.text();
        return res;
    }).then(function(datos){
        // y aca ya obtenemos los datos
        console.log(datos);
        resultado.innerHTML=datos;
    }).catch(function(error){
        console.log(error);
    });
}


function cargarjson(){
    fetch('empleados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html='';
        data.forEach(function(empleado){
            html+=` <p> ${empleado.nombre}  ${empleado.puesto}</p>`;
            
        });
        resultado.innerHTML=html;
    })
    .catch(function(error){
        console.log(error);
    })

}


function cargardatosapi(){
    fetch('https://picsum.photos/list')

        .then(function(res){
            return res.json();
        })
        .then(function(datos){
            let html1='';
            datos.forEach(function(fotos){
                html1+=`
                    <li>
                   <a target="_blank" href= ${fotos.post_url}>ver imagen </a>
                                            Autor:  ${fotos.author}
                   </li>
                 `;
            })
            resultado.innerHTML=html1;
        })
        .catch(function(err){
            console.log(err);
        })
}