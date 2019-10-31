function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    Ninja.prototype.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
}

    Ninja.prototype.sayName = function() {
        console.log("My ninja name is " + this.name);
        return this;
    }    
    Ninja.prototype.drinkSake= function() {
        this.health = this.health + 10;
        return this;
    }  
    var ninja1 = new Ninja("Phaenorah");
        ninja1.sayName();
        ninja1.showStats();
        ninja1.drinkSake();
        ninja1.showStats();