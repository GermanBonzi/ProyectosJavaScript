const comprarBoleto = (function() {
  let evento = "Conferencia JS 2019";

  return {
    mostrarBoleto: function() {
      const elemento = document.createElement("p");
      elemento.textContent = `comprando boleto para:  ${evento}`;
      const div = document.getElementById("app");
      div.appendChild(elemento);
    }
  };
})();

comprarBoleto.mostrarBoleto();
