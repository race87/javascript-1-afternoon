/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

//Code Here
function isTyler(name){
  if (name==='Tyler'){
    return true
  } else {
    return false
  };
};


////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

//Code Here
function getName (){return prompt("Please type in name")
};


////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

//Code Here
function welcome (){
  alert("Welcome, "+getName())
}



////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

//Answer Here
//"Parameters are defined first and consequently you receive the parameters. Arguments are the values that are sent through the parameters"


////////// PROBLEM 5 //////////

/*
What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

//Answer Here
//0
//undefined
//null
//""
//false
//NaN
// check: if (x) { /* truthy */ } else { /* falsy */ }


////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/

//Code Here
  function myName(){
    let name="Race Ostler"
    return name
  }


/*
  Now save the function definition of myName into a new variable called newMyName
*/

//Code Here
let newMyName = myName;


/*
  Now alert the result of invoking newMyName
*/

// Code Here
alert (newMyName)


////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

//Code Here
function outerFn (){
  return function (){
    return name
  }};



/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/
let innerFn = outerFn()
//Code Here



/* 
  Now invoke innerFn.
*/

// Code Here
console.log(innerFn())


