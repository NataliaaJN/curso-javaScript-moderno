//             TRIM            //

const product = "         Monitor 20 pulgadas           ";

console.log(product);

// Eliminar espacio en blanco del inicio

console.log(product.trimStart());
console.log(product.trimEnd());
console.log(product.trimStart().trimEnd());

console.log(product.trim());