//      NO MODIFICA EL ARRAY ORIGINAL      //
const shoppingCart = [];

const product = {
    name: "Monitor",
    price: 400,
}

const product2 = {
    name: "Teclado",
    price: 40,
}

const product3 = {
    name: "Tablet",
    price: 240,
}

// el array original no se modifica
// copiamos el array del carrito de la compra
let result = [...shoppingCart, product] // añado el producto al final
   result = [product2, ...result] // añado el producto al final