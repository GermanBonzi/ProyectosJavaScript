
// creando objetos

function Cliente(nombre,apellido,sueldo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.sueldo=sueldo;
}


const persona = new Cliente('German','Bonzi',20000);

console.log(persona);


const pedro = new String('soy pedro');
const nombre = new String('yo soy juan');

console.log(pedro.localeCompare(nombre));


