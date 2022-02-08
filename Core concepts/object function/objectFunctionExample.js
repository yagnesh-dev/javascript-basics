var simple = {} //Method 1 to create object

var obj = new Object(); // Method 2 to create object

console.log("simple",simple)
console.log("obj",obj)
console.log("simple",simple.__proto__)
console.log("obj",obj.__proto__)


console.log("obj === simple",simple.__proto__ === obj.__proto__) //proves implicitly object property is called