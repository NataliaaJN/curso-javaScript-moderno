// Hacer que objeto se comporte como una constante (NO se modifique)
"use strict";
const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    available: true,
}


// Hacer que un objeto no se pueda modificar
Object.freeze(product);

// Esto daría error, porque no se puede modificar el objeto:
// product.available = false;
