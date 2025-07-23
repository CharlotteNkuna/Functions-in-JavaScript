prompt = require('prompt-sync')();
let x = prompt("Enter the length: ");
let y = prompt("Enter the breadth: ");
let length = parseInt(x);
let breadth = parseInt(y);


function area(length, breadth){
 this.length = length;
 this.breadth = breadth; 
 let answer = length * breadth;
 return answer; 
}
console.log("The area of a rectangle is: " + area(length,breadth));