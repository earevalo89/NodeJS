function enrutar(manejador, ruta, respuesta) {
    console.log("Voy a enrutar algo para " + ruta);

    if (typeof manejador[ruta] === 'function') {
        manejador[ruta](respuesta);
        // return manejador[ruta]();
    } else {
        console.log("No existe una función para esa ruta " + ruta);
    }

}

exports.enrutar = enrutar;