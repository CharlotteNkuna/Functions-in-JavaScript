//additional information passed to a function
function multiplies(a, b){
    return a * b; 
}
const totalValue = multiply(5, 2);
console.log(totalValue)


function multiply(a, b){
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}
console.log("The answer is " + multiply(69)); // 69





//calling out a function
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to DevopsforDevops")
    }
    // creating a variable
    let nameVal = "Admin";

    // calling the function
console.log(welcomeMsg(nameVal));
