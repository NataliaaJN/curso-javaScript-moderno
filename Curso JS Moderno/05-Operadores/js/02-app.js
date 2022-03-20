const number1= 20;
const number2= "20";
const number3= 30;

// Comprobar si 2 números son iguales
// Comparador -> SOLO se fija en el VALOR (NO en el tipo de dato)
console.log(number1 == number3);
console.log(number1 == number2);

// Comparador estricto
console.log(number1 === number3);
console.log(number1 === parseInt(number2));
console.log(typeof number1);


// Diferente
const password1 = "admin";
const password1 = "Admin";

console.log(password1 != password2);
console.log(number1 != number2);
console.log(number1 !== parseInt(number2));
