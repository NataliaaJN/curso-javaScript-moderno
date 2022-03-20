// Copiar 2 objetos
const product = {
    name : "Monitor 20 pulgadas",
    price : 300,
    available : true,
}

const measures = {
    kilos: "1kg",
    measure: "1m",
}

console.log(product);
console.log(measures);


// Unir 2 objetos
// assign
const result = Object.assign(product, measures);

// spread operator
const result2 = {...product, ...measures};
