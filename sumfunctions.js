//let num1 = 10;
//let num2 = 12;



//placeholder function: for a user to typo/input info

//using prompt- a string library
//prompt = require('prompt-sync')();
//let num1 = prompt("Type any number:"); // string prompt
//let num2 = prompt("Type another number:");;


//parse string to integer
prompt = require('prompt-sync')();
let x = prompt("Type any number:");
let y = prompt("Type another number:");
let num1 = parseInt(x);
let num2 = parseInt(y);


function sum(num1, num2){
 this.num1 = num1;
 this.num2 = num2; 
 let answer = num1 + num2;
 return answer; 
}
console.log(sum(num1,num2))