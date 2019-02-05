//Convertir el elemento servidor.js en un módulo que pueda llamar desde un archivo principal y así poder pasar parámetros para hacerlo más adaptable.
var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, manejador) {
    function inicializarServidor(require, respuesta) {

        var ruta = url.parse(require.url).pathname;

        console.log("Alguien se ha conectado");

        var contenido = enrutar(manejador, ruta);

        var registro = fs.createWriteStream('registro.txt', { 'flags': 'a' });
        registro.write(ruta + '\n');

        respuesta.writeHead(200, { "Content-Type": "text/html", "charset": "UTF-8", "lang": "es" });
        //respuesta.write("<h2>El servidor est&aacute; funcionando correctamente</h2>");
        respuesta.write(contenido);
        respuesta.end();
    }

    servidor.createServer(inicializarServidor).listen(7777);
}

exports.iniciar = iniciar;