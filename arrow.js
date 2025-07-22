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

  