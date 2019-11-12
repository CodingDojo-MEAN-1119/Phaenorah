//Copy the code snippets into the TypeScript Playground tool. Identify the errors found in each code snippet. You will see red bars in the Typescript side of the Playground where there is an error.

//Fix the errors in the Playground so that all the red bars are gone and the code still runs as desired.
// Make comments in the code to explain what each error was and how you fixed it.
// For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.

// 1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "Duh";

//**Changeed output to String or myString to any to accept both.

// 2. Setting the types of function parameters
function sayHello(name: any){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));

//**changed it to any to accept both String and Number

// 3. Optional parameters
function fullName(firstName: string, lastName: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

//**added ? to middleName to make it Optional or if/else conditions


//  4. Interfaces and function parameters
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student) {
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//**changed belt to belts are required in the function keys(ninja.belts)

// 5. Classes and function parameters
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")  //***Removed copy
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Alan","Turing");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(shane)); //**const "turing" is not an instance of Ninja.

//  6. Arrow functions
var increment = (x: number) => x + 1;   //**added paranthesis to x and 
                                        //**infered parameter type to number from any.
// This works great:
console.log(increment(3));
var square = (x: number) => x * x;  //**Removed {x*x} curly braces //**infered parameter type to number from any.
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x: number,y: number) => x * y; //**infered parameter type to number from any.
// Nor is this working:copy
var math = (x: number, y: number) => {    //**added {} after =>
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

// 7. Arrow functions and 'this'
class Elephant {
   constructor(public age: number){}
   birthday = () => function(){    //**added () => after birthday = sign
      this.age++;                   //**not sure how to fix???? ask instructor
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.