//A function expression is when a function is assigned to a variable. no function name
//anonymous function expression
const greet = function(name) {
    return `Avuxeni sesi ${name}`;
  };
  
  console.log(greet("Charlotte")); 


  const calculateDiscount = function(price, discount) {
    return price - (price * discount); //500 - 500 * 0.2
  };
  
  console.log("Discounted price: R" + calculateDiscount(500, 0.2));
  


// named function expression
const calculateProduct = function add(x, y) {
    return x + y;
  };
  
  console.log(calculateProduct(5, 3));


const square = function(number){
    return number * number;
}

const x = square(4);
console.log(x);



 