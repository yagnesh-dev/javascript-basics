//i want to use varibles and functions but don't want to define in global scope 
//so we create iife(Immediately invoked function expression)


//part 1
var a = 10;
var b = 10;
console.log("global variable addition",a+b);

//above example has 2 global variables, for optimal coding we want least global variables
//so we wrap it in function as below

//part2
function myFn(){
    var a = 10;
    var b = 20;
    console.log("function scoped variable addition",a+b);
}

myFn();


//part 2 solves the problem of introducing global variables but
// at same time introduces a new global variable myFn();
//To solve problem of part 1 and 2 together we will use iife as mentioned below

(function (){ //no name so no global variable but to execute it right away we wrap it around () also called as anonymous function i.e function with no name
    var a = 10;
    var b = 30;
    console.log("iife scoped variable addition",a+b);
})();

//benefits

//a and b are not polluting global scope
//myfn is not polluting global scope as well
//function disappears once executed from execution flow