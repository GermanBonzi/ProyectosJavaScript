function constructordesitios() {
  this.crearElementos = function(texto, tipohtml) {
    let html;

    if (tipohtml == "input") {
      html = new InputHTML(texto);
    } else if (tipohtml == "img") {
      html = new ImagenHTML(texto);
    } else if (tipohtml == "h1") {
      html = new HeadingHTML(texto);
    } else if (tipohtml == "p") {
      html = new ParrafoHTML(texto);
    }
    html.tipohtml = tipohtml;
    html.mostrar = function() {
      const elem = document.createElement(this.tipohtml);

      if (this.tipohtml == "input") {
        elem.setAttribute("placeholder", this.texto);
      } else if (this.tipohtml == "p") {
        elem.appendChild(document.createTextNode(this.texto));
      } else if (this.tipohtml == "img") {
        elem.setAttribute("src", this.texto);
      }

      document.getElementById("app").appendChild(elem);
    };

    return html;
  };
}

const HeadingHTML = function(texto) {
  this.texto = texto;
};

const InputHTML = function(texto) {
  this.texto = texto;
};

const ImagenHTML = function(texto) {
  this.texto = texto;
};

const ParrafoHTML = function(texto) {
  this.texto = texto;
};

const sitioWeb = new constructordesitios();

//almacenar los elementos
const elementosweb = [];
elementosweb.push(sitioWeb.crearElementos("bienvenidos", "h1"));
elementosweb.push(sitioWeb.crearElementos("bienvenidos al sitio web", "p"));
elementosweb.push(sitioWeb.crearElementos("ingresar datos", "input"));

elementosweb.forEach(function(data) {
  data.mostrar();
});

console.log(elementosweb);
