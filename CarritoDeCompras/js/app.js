// VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listadecursos= document.querySelector('#lista-carrito tbody');
const vaciarcarrito=document.getElementById('vaciar-carrito');





//LISTENERS

cargarEventListeners();
function cargarEventListeners(){
    // Dispara cuando se presiona "agregar carrito"
    cursos.addEventListener('click',comprarcurso);

    //se dispara cuando se elimina un curso del carrito
    carrito.addEventListener('click',eliminardelcarrito);

    // se dispara al vaciar el carrito
    vaciarcarrito.addEventListener('click',vaciarelcarrito);

    // al cargar el html, mostrar local storage

    document.addEventListener('DOMContentLoaded',leerlocalstorage);

}


//FUNCIONES

//funcion que añade el curso al carrito en el dom
function comprarcurso(e){
    e.preventDefault();
    //delegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;

        //enviamos el curso seleccionado para tomar sus datos
        leerdatosdelcurso(curso);
    }


}

//funcion que lee los datos del curso en el dom

function leerdatosdelcurso(curso){
    const infocurso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id')
    }
    insertarAlCarrito(infocurso);
}


//muestra el curso seleccionado en el carrito en el dom
function insertarAlCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML= `   
                <td>
                    <img src="${curso.imagen}" width=100>
                
                </td>
                <td> ${curso.titulo}</td> 
                <td> ${curso.precio}</td>
                <td> 
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
                </td>
                `;
    listadecursos.appendChild(row);    
    guardarcursoLocalStorage(curso);

}



// elimina el curso del carrito en el dom
function eliminardelcarrito(e){
    e.preventDefault();  
    let curso;
    let cursoid;

    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoid = curso.querySelector('a').getAttribute('data-id');
        console.log(cursoid);
    }

    eliminarcursodelocalstorage(curso);

}


//elimina los cursos del carrito en el dom cuando clickeamos el boton "vaciar carrito" 
function vaciarelcarrito(){
    while(listadecursos.firstChild){
        listadecursos.removeChild(listadecursos.firstChild);
    }
    return false;
}



// almacena los cursos del carrito en el local storage
function guardarcursoLocalStorage(curso){
    let cursos;
    //cursos va a ser un array que obtiene los datos de la funcion obtenercursosdelocalstorage
    cursos=obtenercursolocalstorage();
    console.log(cursos);
    //al array cursos le paso el curso actual en el que clickeo
    cursos.push(curso);
    localStorage.setItem('cursos',JSON.stringify(cursos));
}


// esta funcion comprueba que haya o no elementos en LOCAL STORAGE
function obtenercursolocalstorage(){
    let cursosLocalStorage;

    //comprobamos si hay algo en local storage
    if (localStorage.getItem('cursos')==null){
        cursosLocalStorage=[];
    }
    else{
        cursosLocalStorage=JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLocalStorage;
}



// esta funcion imprime los cursos almacenados en local storage al carrito
function leerlocalstorage(){
    let cursosLocalStorage;
    cursosLocalStorage=obtenercursolocalstorage();
    console.log(cursosLocalStorage);
    cursosLocalStorage.forEach(function(curso){
        //construir el template
        const row = document.createElement('tr');
        row.innerHTML= `   
                <td>
                    <img src="${curso.imagen}" width=100>
                
                </td>
                <td> ${curso.titulo}</td> 
                <td> ${curso.precio}</td>
                <td> 
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
                </td>
                `;


        listadecursos.appendChild(row);
    });

}
 


//funcion que elimina el curso por el atributo id de local storage

function eliminarcursodelocalstorage(curso){
    let cursosLocalStorage;
    cursosLocalStorage=obtenercursolocalstorage();

    cursosLocalStorage.forEach(function(cursoLS,index){
        if(cursoLS.id===curso){
            cursosLocalStorage.splice(index,1);
        }

    });

    localStorage.clear();

}


