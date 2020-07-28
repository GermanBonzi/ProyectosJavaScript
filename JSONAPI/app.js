
const cargarPosts = document.querySelector('#cargar ');
const listado = document.getElementById('listado');
cargarPosts.addEventListener('click',cargardatos);





function cargardatos(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://jsonplaceholder.typicode.com/posts', true);

    xhr.onload= function(){
        if(this.status==200){
            const personas = JSON.parse(this.responseText);
            let htmltemplate='';
            personas.forEach(function(persona){
                htmltemplate +=   `
                                    <h3>TITULO: ${persona.title}</h3>
                                    <p>CUERPO: ${persona.body}</p>
                
                
                       `;
            });
            listado.innerHTML=htmltemplate;
        }
    }

    xhr.send();

}