//temporal dead zone 
//var vs let declaration behaviour in hoisting
console.log("x declared var below",x); // undefined
console.log("y declared let below",y); // ReferenceError: Cannot access 'y' before initialization

var x = 'local';
let y = 'local';