//       map      //

const shoppingCart = [
    { name: "Monitor 27 pulgadas", price: 500 },
    { name: "Televisión", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Audífonos", price: 300 },
    { name: "Teclado", price: 400 },
    { name: "Móvil", price: 700 },
  ];
  
  const newArray = shoppingCart.forEach( product => {
    return `${product.name} - Precio: ${product.price}`;
})
  
  
  const newArray2 = shoppingCart.map( product => {
      return `${product.name} - Precio: ${product.price}`;
  })

  console.log(newArray); // El array del forEach no devuelve nada
  console.log(newArray2); 
  