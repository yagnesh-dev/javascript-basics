class Player{
    constructor(name,id){
        console.log("Player",this)
        this.name = name;
        this.id =id;
    }

    introduce(){
        console.log(`Hi ${this.name} belongs to ${this.id}`);
    }
}
class Wizard extends Player{
    constructor(name,id){
        super(name,id);
        console.log("wizard",this)
    }
    play(){
        console.log(`Hey, I am ${this.name}`)
    }
}

const wizard = new Wizard("Yagnesh","Wizard");
const wizardOne = new Wizard("Zen","Witch");
wizard.introduce();
wizard.play();
wizardOne.introduce();
wizardOne.play();