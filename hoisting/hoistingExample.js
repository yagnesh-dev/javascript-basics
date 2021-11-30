//Variables declared or initialized will have their 
//declaration "moved" up to the top of their module/function-level scope, which we refer to as hoisting
console.log("varExample before assigning value ",varExample); //Prints undefined
var varExample = 1;
console.log(varExample); //Prints 1



//function Declaration
console.log(foo); // [Function : foo]
foo(); // 'FOOOOO'
function foo(){
    console.log('FOOOOO');
}
console.log(foo); // [Function : foo]

//Function Expression
console.log("bar before declaration",bar); //undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function (){
    console.log('BARRRR');
}
console.log(bar); //[Function: bar]