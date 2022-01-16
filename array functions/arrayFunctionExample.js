let originalArray = ['a','b','c','d'];
copiedArray = [...originalArray]
copiedTwoArray = [...originalArray];

console.log("Original Array",originalArray)
console.log("toString Example",copiedTwoArray.toString())
console.log("join Example",copiedTwoArray.join("*"))
console.log("Pop Example",copiedArray.pop()); //['a','b','c']
copiedArray.push('e') // returns index value on directly printing in console
console.log("Push Example",copiedArray); //['a','b','c','e']
copiedArray.unshift('x')// returns index value on directly printing in console
console.log("unshift Example",copiedArray)//['x','a','b','c','e']
copiedArray.shift()// returns index value on directly printing in console
console.log("shift Example",copiedArray)//['a','b','c','e']
delete copiedArray[0];
console.log("delete Example",copiedArray)
const tryDelete = {
    name:"yagnesh",
    age:"25"
}
delete tryDelete.age;
console.log(tryDelete)