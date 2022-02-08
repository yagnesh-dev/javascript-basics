function foo(){
}
console.log("foo",foo);
const bar = () =>{

}
console.log("bar",bar);

console.log("Printing Prototype object of created functions")
console.log("foo prototype",foo.prototype);
console.log("bar is arrow function so prototype will give ",bar.prototype);
let test = new foo();
console.log("test",test.__proto__);
