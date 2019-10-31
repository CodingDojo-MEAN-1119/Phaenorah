class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name} , Health:  ${this.health} , Speed:  ${this.speed} , Strength:  ${this.strength}`);
    }
    drinkSake() {
        this.health = this.health + 10;
        return this;
    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const ninja1 = new Ninja("Phaenorah");
const superSensei = new Sensei("Master Splinter");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"