
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');




boton1.addEventListener('click',datosboton1empleado);
boton2.addEventListener('click',datosboton2empleados);


function datosboton1empleado (){
    const xhr= new XMLHttpRequest();

    //abro la conexion y le paso la peticion, el archivo de donde saco los datos y true
    xhr.open('GET','empleado.json',true);


    xhr.onload=function(){
        if (this.status==200){

            // asi incrusto en el dom el json extraido de la peticion get
           const persona = JSON.parse(this.responseText);
            const htmltemplate =`<ul> 
                                    <li>ID: ${persona.id} </li>
                                    <li>NOMBRE: ${persona.nombre} </li>
                                    <li>EMPRESA: ${persona.empresa} </li>
                                    <li>CARGO: ${persona.trabajo} </li>
                                </ul>
            
            `;

            document.getElementById('empleado').innerHTML=htmltemplate;

        }

    }

    xhr.send();
  
}






function datosboton2empleados(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','empleados.json',true);

    xhr.onload= function(){
        if (this.status==200){
                const personal = JSON.parse(xhr.responseText);

                let htmltemplate1= '';
                personal.forEach(function(persona){
                    // lleva el mas= para ir concatenando en cada iteracion del foreach
                    htmltemplate1 +=`<ul> 
                                <li>ID: ${persona.id} </li>
                                <li>NOMBRE: ${persona.nombre} </li>
                                <li>EMPRESA: ${persona.empresa} </li>
                                <li>CARGO: ${persona.trabajo} </li>
                            </ul>

                        `;
                               

                });

            document.getElementById('empleados').innerHTML=htmltemplate1;
        }

    }


    xhr.send();
}