function getNames(paramFirstName,paramLastName){ /* Returning multiple values from a function using an array */
    let firstName = paramFirstName,lastName = paramLastName;
    return [firstName,lastName];
}

const names = getNames("Yagnesh","Devashrayee");
console.log("names",names);

const firstName1 = names[0],lastName1 = names[1];
console.log("firstName",firstName1);
console.log("lastName",lastName1);
/* Instead of calling using indexes directly as above after ES6 we can use destructuring syntax as below*/

const [firstArrayName, lastArrayName] = getNames("John","Doe"); //destructuring assignment
console.log("After destructuring syntax")
console.log("firstName",firstArrayName);
console.log("lastName",lastArrayName);


function getObjectNames(paramFirstName,paramLastName){ /* Returning multiple values from a function using an array */
    let firstName = paramFirstName,lastName = paramLastName;
    return {firstName,lastName};
}

let objectNames = getObjectNames("Alice","Bob");
const firstName2 = objectNames.firstName,lastName2 = objectNames.lastName;
console.log("firstName",firstName2);
console.log("lastName",lastName2);
/* Instead of calling using property names... */

let { firstName, lastName } = getObjectNames("Iron","Man");
console.log("For object after destructuring...")
console.log("firstName",firstName);
console.log("lastName",lastName);