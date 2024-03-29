var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
                                    // Assign that object's west attribute to piglet
var robin = { character: "Christoper Robin"};
var kanga = { character: "Kanga"};
robin.north = kanga;
kanga.south = robin;
                                    
var bees = { character: "Bees" };
bees.west = pooh;
pooh.east = bees;

var owl = { character: "Owl"};
owl.east = robin;
robin.west = owl;

var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
rabbit.east = gopher;
gopher.west = rabbit;

var eeyore = { character: "Eeyore"};
var heffalumps = { character: "Heffalumps"};
eeyore.east = heffalumps; 
heffalumps.west = eeyore;

var player = {
location: tigger
}
function move(dir){
    if(dir == "north" || dir == "North"){
        if(player.location.north == null){
            console.log("You attempt to head North, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log("You head North and arrive at " + player.location.character + "'s house!");
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You attempt to head South, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log("You head South and arrive at " + player.location.character + "'s house!");
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You attempt to head East, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log("You head East and arrive at " + player.location.character + "'s house!");
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You attempt to head West, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log("You head West and arrive at " + player.location.character + "'s house!");
        }
    }
}

move("north");
move("west");
move("north");
move("east");
move("north");
move("north");
move("east");