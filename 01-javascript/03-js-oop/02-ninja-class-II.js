function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
    this.kick = function(ninja) {
        var damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
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
    Ninja.prototype.punch = function(target) {
        if(!(target instanceof Ninja)){
            console.log(target + "is not a Ninja");
        }else{
            target.health = target.health - 5;
            console.log(target.name + " was punched by " + this.name + " and lost 5 Health!");
            return this;
    } 
}   
    var ninja1 = new Ninja("Phaenorah");
    var blueNinja = new Ninja("Goemon");
    var redNinja = new Ninja("Bill Gates");
        redNinja.punch(blueNinja);
        blueNinja.kick(redNinja);
       