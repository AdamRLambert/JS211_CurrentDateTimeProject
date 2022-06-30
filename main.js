// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

console.log("hello")

console.log(new Date())

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = () => {

let convertNum = 10

console.log(convertNum) 

document.getElementById("numToString").innerHTML = convertNum;
}


// Write a JavaScript program to convert a string to the number.

function stringToNum() {

  let convertString = "28";

  let newNumber = parseInt(convertString);

  console.log(newNumber);

  document.getElementById("stringToNumber").innerHTML = newNumber;

  return newNumber;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

// get a value from a form input and put in a variable
// if type of  input variable is booloen 
//    return "it's a boolean"
// else if it's a null value (probably type null)
//    return "it's a null value"
// if type of input variable is undefined
//    return "it's undefined"
// else if it's a number 
//    return it's a number

  
// Write a JavaScript program that adds 2 numbers together.

function sum1 () {

const num1 = 3
const num2 = 2

const sum = num1 + num2 

console.log (sum)

document.getElementById("total").innerHTML = sum;

}


// Write a JavaScript program that runs only when 2 things are true.

function cakeAndPie () {
let cake = true;
let pie = true;

if (cake == true && pie == true) {


document.getElementById("cakeAndPie").innerHTML = "There is cake and pie";
}

else {

document.getElementById("cakeAndPie").innerHTML = "The cake is a lie";
}


}


// Write a JavaScript program that runs when 1 of 2 things are true.

function cakeOrPie () {
cake = true;
pie = true;

if (cake == true || pie == false) {

document.getElementById("cakeOrPie").innerHTML = ("There is cake and no pie");
}



}
// Write a JavaScript program that runs when both things are not true.  
function noCakeAndNoPie () {
cake = false;
pie = false;

if (cake == false && pie == false) {

document.getElementById("noCakeAndNoPie").innerHTML =("There is no cake and no pie");
}

else {
console.log("The cake is a lie");
}

}


function display () {
  
const x = document.getElementById("javatype").value;



document.getElementById("answer").innerHTML=(typeof x)
  


}






    
  
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
