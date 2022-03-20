//     OBJECT CONSTRUCTOR  //

// Object literal
const product = {
    name : "Monitor 20 pulgadas",
    price : 300,
    available : true,
}

// Object constructor
function Product(name, price){
    this.name = name;
    this.price = price;
    this.available = true;
}

const product2 = new Product("Monitor", 500);