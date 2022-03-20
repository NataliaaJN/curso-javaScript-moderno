//   STRING METHODS: replace, slice, substring        //
const product = "Monitor 20 pulgadas";

// .replace() para reemplazar
// Reemplazar el texto de una cadena
console.log(product.replace("pulgadas", '"'));
console.log(product.replace("Monitor", 'Monitor curvo'));


// .slice() para cortar
console.log(product.slice(0,10));
console.log(product.slice(8));
console.log(product.slice(2,1));


// .substring(), alternativa a slice
console.log(product.substring(0,10));
console.log(product.substring(2,1));

// Cortar solo una letra
const user= "Juan";
console.log(user.substring(0,1));
console.log(user.charAt(0));