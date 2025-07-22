//Declares or define a fucnction name with a keyword

// Function declaration
function greet(name) {
    return `Avuxeni, ${name}`;
  }
  
  // Calling the function
  let message = greet("Charlotte");
  console.log(message);



//calculating price and quantity as keywords
  function calculateValues(price, quantity){
    return price * quantity;
  }

  let total = calculateValues(5, 10);
  console.log("The total cost is R: " + total);
