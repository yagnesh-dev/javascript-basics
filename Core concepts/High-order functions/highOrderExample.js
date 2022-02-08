//Functions are first class Citizens
//-> Assign to a variable
//-> Pass as an argument
//-> Return from other functions
import { compose,pipe} from 'lodash/fp';
function sayHello(){
    return "Hello World";
}

let fn = sayHello;
fn(); //1
sayHello(); //2
// 1 and 2 have same output
//-----------------------------
function greet(fnMessage){ // High order functions
    console.log(fnMessage());
}

greet(sayHello);

//-----------------------------
function sayHelloWorld(){ 
    return function(){
        return "Hello World";
    }
}

let fnhw = sayHelloWorld();
let message = fnhw();

//-----------------------------
// More High order functions Examples 
//1.compose
//2.pipe
//3.map, filter ,forEach etc


//1
let numbers = [1,2,3];
numbers.map(number => number *2)
//2
setTimeout(()=> console.log("Hello"),1000);

//-----------------------------
//Non function type code
let input=" JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

//function type code
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();


//const result = wrapInDiv(toLowerCase(trim(input))); //functional composition in function programming
const transformCompose = compose(wrapInDiv, toLowerCase, trim); // takes multiple functions as input and returns a single function as output HOF
transformCompose(input);
console.log(result);
//trim
//wrapInDiv