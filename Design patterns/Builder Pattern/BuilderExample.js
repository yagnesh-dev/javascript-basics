class Address{
    constructor(zip,street){
        this.zip = zip;
        this.street = street;
    }
}

// class User{
//     constructor(name,age,phone,address){
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//         this.address = address;
//     }
// }

// const user = new User('Bob');
// console.log(user);

//problems in above code : if i want to add just the address
//-------------------
// const user = new User('Bob',undefined,undefined,new Address(101,"Lane"));
// console.log(user);
//-------------------
//i'll have to add undefineds in params, as program grows, that can be tedious to identify
//Builder pattern solves this problem, mentioned below

class User{
    constructor(name){
        this.name = name;
    }
}

class UserBuilder{
    constructor(name){
        this.user = new User(name);
    }

    setAge(age){
        this.user.age = age;
        return this;
    }

    setPhone(phone){
        this.user.phone = phone;
        return this;
    }

    setAddress(address){
        this.user.address = address;
        return this;
    }

    build(){
        return this.user;
    }
}

let userBuilder =  new UserBuilder('Bob').setAge(10).setAddress(new Address("101","Lane")).build();
console.log(userBuilder)