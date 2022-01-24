//Classical Interitance
console.log(`-----------Prototype-------------`);
var PlayerTwo = function(name, type){
    this.name = name;
    this.type = type;
}

PlayerTwo.prototype.introduce = function() {
    console.log(`Hi ${this.name}, I'm a ${this.type}`);
}
var wizard1 = new PlayerTwo('Shelly', 'healer');
var wizard2 = new PlayerTwo('Shawn', 'Dark Magic');

wizard1.play = function(){
    console.log(`Hiii I am ${this.type}`);
}

wizard2.play = function(){
    console.log(`Hiii I am ${this.type}`);
}

wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();