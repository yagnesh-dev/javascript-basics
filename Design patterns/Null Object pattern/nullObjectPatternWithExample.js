class NewUser{
    constructor(id,name){
        this.name = name;
        this.id =id;
    }

    hasAccess(){
        return this.name === 'Bob'
    }
}

class NullUser{
    constructor(){
        this.name = "Guest";
        this.id =-1;
    }

    hasAccess(){
        return false;
    }
}


const newUsers = [
    new NewUser(1, 'Bob'),
    new NewUser(2, 'John')
]

function getUser(id){
   const user = newUsers.find(user=> user.id === id)
   if(user == null){
       return new NullUser();
   }else{
       return user;
   }
}

function printUser(id){
    const user = getUser(id)


console.log('Hello ' + user.name)

if(user.hasAccess()){
    console.log("You have access");
}else{
    console.log('You are not allowed here')
}
}

//Executing
console.log("--------With Null Object Pattern implementation------")
printUser(1);
printUser(2);
printUser(3);