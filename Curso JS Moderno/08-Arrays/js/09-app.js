//       for Each       //

const shoppingCart = [
  { name: "Monitor 27 pulgadas", price: 500 },
  { name: "Televisión", price: 100 },
  { name: "Tablet", price: 200 },
  { name: "Audífonos", price: 300 },
  { name: "Teclado", price: 400 },
  { name: "Móvil", price: 700 },
];

for (let i = 0; i < shoppingCart.length; i++) {
  console.log(`${shoppingCart[i].name} - Precio: ${shoppingCart[i].price}`);
}


shoppingCart.forEach( product => {
    console.log(`${product.name} - Precio: ${product.price}`);
})
