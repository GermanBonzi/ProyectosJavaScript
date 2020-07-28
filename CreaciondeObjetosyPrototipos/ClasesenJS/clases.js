
class Cliente {

    constructor(){
    }


    // getters and setters
    setNombre (nombre) {
        this.nombre=nombre;        
    }

    setApellido (apellido) {
        this.apellido=apellido;
    }

    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }

    //los metodos staticos son parte de la clase y no del objeto, por lo tanto se puede 
    // acceder unicamente desde la clase.nombredelmetodostatic
    static saludo(){
        return `bienvenido al cajero automatico`;
    }

    setSaldo(saldo){
        this.saldo=saldo;
    }
    getSaldo(){
        return this.saldo;
    }
}


// HERENCIA
class Empresa extends Cliente{
    constructor(telefono,tipo){
        //puedo dejar el constructor vacio para seteear los datos desp de crear el objeto
        // o puedo pasarle los parametros al constructor y desp a super para q los herede
        // y setearle los atributos cuando se crea el objeto

        //va al constructor padre para heredar los atributos
        super();
        this.telefono=telefono;
        this.tipo=tipo;
    }

    setEmpresa(nombre){
        this.nombre=nombre;
    }

    getEmpresa(){
        return this.nombre;
    }
}

// OBJETO CLIENTE
const cliente = new Cliente();
console.log(Cliente.saludo());
cliente.setNombre('javier');
cliente.setApellido('mendez');
console.log(cliente);


// OBJETO EMPRESA
const empresa1=new Empresa(3445567896,'SRL');
empresa1.setEmpresa('ELECTRIC TESLA');
empresa1.setSaldo(100000);
console.log(empresa1);