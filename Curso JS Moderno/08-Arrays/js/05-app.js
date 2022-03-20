//     MODIFICA EL ARRAY ORIGINAL       //
// Añadir nuevos elementos al inicio o al final de un array
const shoppingCart = [];

// Añadir al final
const product = {
    name: "Monitor",
    price: 400,
}

shoppingCart.push(product);

const product2 = {
    name: "Teclado",
    price: 40,
}

shoppingCart.unshift(product2);