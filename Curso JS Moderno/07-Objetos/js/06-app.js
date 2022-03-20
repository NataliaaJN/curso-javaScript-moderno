const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    available: true,
    information: {
      measures: {
        kilos: "1Kg",
        measure: "1m",
      },
  
      fabrication : {
          country: "Spain",
      }
    },
  };

  const { name, information, information:{ measures, measures:{ kilos } } } = product;

  console.log(information);
  console.log(measures);