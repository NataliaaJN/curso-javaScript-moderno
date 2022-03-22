//     Métodos de array    //

const shoppingCart = [];

const product = {
    name: "Monitor",
    price: 400,
}

const product2 = {
    name: "Móvil 1",
    price: 800,
}


const product3 = {
    name: "Teclado",
    price: 50,
}

const product4 = {
    name: "Móvil 2",
    price: 40,
}



// .push añade al final de un array
shoppingCart.push(product2);
shoppingCart.push(product);

// .unshift añade al principio de un array
shoppingCart.unshift(product3);
console.table(shoppingCart);

// .pop elimina el último elemento de un array
shoppingCart.pop();
console.table(shoppingCart);

// .shift elimina al inicio del array
shoppingCart.shift();
console.table(shoppingCart);

// .splice
shoppingCart.splice(1,1);
console.table(shoppingCart);