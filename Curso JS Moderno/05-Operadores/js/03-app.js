// Undefined
let number;

console.log(number);

console.log(typeof number);

// Null -> los null son objetos
let number2 = null;
console.log(number2);

console.log(typeof number2); // Objeto

console.log( number == number2);  // compara el undefined con el null (el que no existe) -> al NO ser estricto, devuelve TRUE

console.log( number === number2); // Con el comparador ESTRICTO -> devuelve TRUE