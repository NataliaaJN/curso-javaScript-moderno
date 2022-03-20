const number1= "20";
const number2= "20.2";
const number3= "Uno";
const number4= 20;

// Convertir string a número
console.log(Number.parseInt(number1));
console.log(Number.parseFloat(number2)); // número decimal
console.log(Number.parseFloat(number3)); // Es una cadena de texto -> devuelve NaN

// Revisar si un número es entero o no
console.log(Number.isInteger(number3));
console.log(Number.isInteger(number4));