// FUNCTIONS 

let x = 9;
let y = 1;



// how to declare a FUNCTION

function sum(){
    return x + y
}

let ret = sum();

console.log('ret=>', ret)


//write a function that returns the square of a number 
//Function `findSquare()` returns the square of the input which is passed as an argument in the function call 
function findSquare(num) {
    return num*num;
  }

  console.log(findSquare(2));



  //

  function printFamilyAges(myAge) {
    const momAge = myAge * 2;
    const dadAge = momAge * 1.2;
    console.log("My mom's age is " + momAge);
    console.log("My dad's age is " + dadAge);
  }

  printFamilyAges(26); 