//syntax: const greet = (name) => {
    //return "Hello, " + name;
  //};

// Arrow function (block body)
const greet = (name) => {
    const message = `Hello, ${name}!`;
    return message;
  };
console.log(greet ("Charlotte") );

//in arrays calculating lenth(characters) of each word
//normal function
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
    const a2 = a.map(function (s) {
    return s.length;
    });
    console.log("Normal way ", a2); // [8, 6, 7, 9]

//using arrow function
    const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3);

let num1 = 34;
let num2 = 11;

let subtraction = (num1, num2) =>{
  num1 = num1;
  num2 = num2
  let answer = num1 - num2;
  console.log(answer);
}
subtraction(num1 , num2)
//you can use var, const, let to declare

  