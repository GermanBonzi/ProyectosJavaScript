// OBJETO CREATE

const Cliente = {
    imprimirsaldo: function(){
        return `hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    },

    retirarsaldo: function(retiro){
        this.saldo-=retiro;
        return `tu retiro es de : ${retiro}, tu nuevo saldo es de ${this.saldo}`
    }
}


 // crear el objeto cliente 

 const cliente = Object.create(Cliente);
 cliente.nombre='german';
 cliente.saldo=1000;
console.log(cliente.imprimirsaldo());
console.log(cliente.retirarsaldo(500));