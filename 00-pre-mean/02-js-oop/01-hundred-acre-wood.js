var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
                                    // Assign that object's west attribute to piglet

var bees = { character: "Bees" };
bees.west = robin.south;
robin.south.east = bees;

var owl = { character: "Owl"};
owl.east = kanga.south;
kanga.south.west = owl;

var robin = { character: "Christoper Robin"};
var kanga = { character: "Kanga"};
robin.north = kanga;
kanga.south = robin;

var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
rabbit.east = gopher;
gopher.west = rabbit;

var eeyore = { character: "Eeyore"};
var heffalumps = { character: "Heffalumps"};
eeyore.east = heffalumps; 
heffalumps.west = eeyore;
