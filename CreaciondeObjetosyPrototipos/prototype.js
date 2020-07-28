

// objeto cliente 
function Cliente(saldo,nombre){
    this.saldo=saldo;
    this.nombre=nombre;
}


// CREAR UN PROTOTYPE

Cliente.prototype.getNomnbre=function(){
    return `${this.nombre}`;
}

const cliente1 = new Cliente(600,'German');
console.log(cliente1)



//objeto banca para empresas
function Empresa(nombre,saldo,telefono,tipoempresa){

    // herencia en js, estoy heredando saldo y nombre del objeto cliente
    Cliente.call(this,saldo,nombre);
    this.telefono=telefono;
    this.tipoempresa=tipoempresa;

}

// heredando la funcion o el prototype de cliente a empresa
Empresa.prototype=Object.create(Cliente.prototype);


const empresa = new Empresa('ELECTRIC COLD',200000,34456473,'SRL');


console.log(empresa.getNomnbre());








