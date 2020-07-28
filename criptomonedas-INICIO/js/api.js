
class API {

    constructor(apikey){
        this.apikey=apikey;
    }

   async obtenertodaslasmonedas(){
        const url =`https://min-api.cryptocompare.com/data/all/coinlist?api_key${this.apikey}`;

        const obtenerurl = await fetch(url);

        const monedas= await obtenerurl.json();

        return {monedas}
        
      
    }


   async obtenervalores(moneda, criptomoneda){
       const url = (`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&`);

       
        // consultar en la api rest
        const urlconvertir = await fetch(url);
        const resultado = await urlconvertir.json();

        return {resultado}
   }
}