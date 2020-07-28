//   VARIABLES
const listaTweets = document.getElementById('lista-tweets');
const formulario = document.getElementById('formulario');






//   EVENTS LISTENERS
eventlisteners();

function eventlisteners(){
    //cuando se envia el formulario
    formulario.addEventListener('submit',agregarTweet);

    //borrar tweets
    listaTweets.addEventListener('click',borrartw);

    //agregar los tw al dom para que se muestre en el html
    document.addEventListener('DOMContentLoaded',contenidoListo);

}



//  FUNCIONES
 


//añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    console.log('formulario enviado');  
    //leer el valor del textarea 
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);
    //crear boton para eliminar del dom  
    const botonborrar = document.createElement('a');
    botonborrar.classList= 'borrar-tweet';
    botonborrar.innerText='X';
    //crear elemento y añadir el contenido a la lista
    const li = document.createElement('li');
    li.innerText= tweet;
    //añade el boton de borrar al dom 
    li.appendChild(botonborrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);

    // añador a Local Storage
     AgregartwALocalStorage(tweet); 
     obtenertwLocalStorage();  
   
}

// eliminar el tw clickeando en el boton x previamente creado
function borrartw(e){
    e.preventDefault();
    if(e.target.className=='borrar-tweet'){
        console.log('diste click en eliminar');
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
        
    }
}


//agregar tw a local storage

function AgregartwALocalStorage(tweet){
    let tweets;
    tweets = obtenertwLocalStorage();
    // añadir el nuevo tweet
    tweets.push(tweet);
    // convertir de strig a arreglo para Local Storage
    localStorage.setItem('tweets',JSON.stringify(tweets))


    localStorage.setItem('tweetss',tweet);

}

// se encarga de comprobar que haya elementos en Local Storage, retorna un arreglo
function obtenertwLocalStorage(){
  let tweets;
  // revisamos los valores de local storage
  if (localStorage.getItem('tweets')==null){
      tweets=[];
  }
  else{
      tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}


// MOSTRAR DATOS DE LOCAL STORAGE EN EL DOM (QUE APAREZCAN EN EL HTML)
function contenidoListo(){
    let tw;
    tw = obtenertwLocalStorage();
    console.log(tw);
    tw.forEach(function(tweet){
         //crear boton para eliminar del dom  
         const botonborrar = document.createElement('a');
         botonborrar.classList= 'borrar-tweet';
         botonborrar.innerText='X';
        //crear elemento y añadir el contenido a la lista
         const li = document.createElement('li');
        li.innerText= tweet;
        //añade el boton de borrar al dom 
         li.appendChild(botonborrar);
         //añade el tweet a la lista
       listaTweets.appendChild(li);
    });
}


// funcion que elimina el tweet de Local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets;
    let tweetBorrado;
    // así se obtiene el tweet a borrar y cortado 
    tweetBorrado = tweet.substring(0, tweet.length - 1)
 
    tweets = obtenertwLocalStorage(); 
 
    tweets.forEach(function(tweet, index){
        if(tweetBorrado === tweet) {
            tweets.splice(index, 1)
        }
    })
 
    localStorage.setItem('tweets', JSON.stringify(tweets))
}