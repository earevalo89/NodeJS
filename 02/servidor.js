// Variable servidor a la cual se le asigna el método require para asignarle el módulo http, que contiene todos los métodos para hacer funcionar un servidor http
var servidor = require('http');

function inicializarServidor(require, respuesta) {
    console.log("Alguien se ha conectado");
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    respuesta.write("<h2>El servidor est&aacute; funcionando correctamente</h2>");
    respuesta.end();
}

servidor.createServer(inicializarServidor).listen(7777);