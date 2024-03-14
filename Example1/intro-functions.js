//1.1----------------------------------function calculate----------------------------------//

function addNumbers(a, b) {
      return a + b;
  }
console.log (addNumbers (20,3));


//1.2-----------------------------------function info-----------------------------------------//

function info(firstName){
    console.log('Hello ' + firstName);
}
 info('Jack');
 info('Jill');
 info('Tom'); 

//1.3---------------------------------function default parameter-------------------------------//
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Jack"); // Outputs: Hello, Jack!
  greet(); // Outputs: Hello, Guest!
  
  
  
  
  //1.4--------------------------------Fewer Arguments than Parameters-----------------------------//
  function greet1(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  greet1("Jill"); // Outputs: Hello, Jack! You are undefined years old.
  
  
  
  //1.5----------------------------------More Arguments than Parameters----------------------------//
  function greet2(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet2("Jill", 25); // Outputs: Hello, Jill!