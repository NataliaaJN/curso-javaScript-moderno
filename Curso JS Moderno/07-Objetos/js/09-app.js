//               SEAL            //
// NO permite añadir o eliminar una propiedad, pero SÍ modificar las ya existentes
"use strict";
const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    available: true,
}


// Hacer que un objeto no se pueda modificar
Object.seal(product);
