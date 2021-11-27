function checkfirstExample(){
    console.log("first Example ",this); // Prints whole 'window' object, 'global' object if executed on node.js
}

checkfirstExample();

const secondExampleObj = {
    name:"Yagnesh",
    age:"25",
    display : function(){
        console.log("secondExample",this); // Prints {name: "Yagnesh", age: "25", display: ƒ} i.e the whole object calling this function, generally any object on 'left of dot operator'.
    }
}
secondExampleObj.display();

function checkthirdExample(){
    console.log("thirdExample",this);// Prints checkthirdExample {}
}
let viewthird = new checkthirdExample();

const fourthExamplefirst = {
    firstName:"Yagnesh",
    lastName:"Devashrayee",
    show : function(){
        console.log("Fourth Example",this.firstName +" "+ this.lastName)
    }
}
const fourthExampleSecond = {
    firstName : "Alice",
    lastName : "Bob"
}
fourthExamplefirst.show();
fourthExamplefirst.show.call(fourthExampleSecond);
fourthExamplefirst.show.apply(fourthExampleSecond);
fourthExamplefirst.show.bind(fourthExampleSecond)();
/*
Prints
Fourth Example Yagnesh Devashrayee
Fourth Example Alice Bob
Fourth Example Alice Bob
Fourth Example Alice Bob
*/