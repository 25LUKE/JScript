console.log("Hello world")
console.log(typeof('Dave'))
console.log(typeof(43))
console.log(typeof(true))

////////////////////// STRING METHOD //////////////////////////
// String
const myVarieble = "Mathematics"
// String Methods 
console.log(myVarieble.charAt(0))
console.log(myVarieble.length)
console.log(myVarieble.indexOf('mat')) // start with the num of the first caracter(5)
console.log(myVarieble.lastIndexOf('ath'))
console.log(myVarieble.slice(4, 9))
console.log(myVarieble.toUpperCase())
console.log(myVarieble.toLowerCase())
console.log(myVarieble.includes('div'))
console.log(myVarieble.split("m"))
console.log("Dave, James, Michael, Jim".split(","))
console.log("Every body likes to have fun".split(" "))

////////////////////// NUMBER METHODS//////////////////////////
//NUMBERS
const myNumb1 = 48;

// A number with a decimal point is a float which reference the "floating point".
const myFloat = 48.01
console.log(myFloat)

const myString = "48"
console.log(myString)

console.log(myNumb1 === myFloat);  // If we remove 1 from the myFloat the equal will be TRUE to myNumber.
console.log(myString + 2)
// Changing a string data type to number
console.log(Number(myString) + 3)
// If we compare myString to myNumber it will give us TRUE.
console.log(Number(myString) === myNumb1)
// Number fuction that can not be converted to a number it's gives us (NaN)
console.log(Number("Dave"))


const myNumb2 = 42;
const myFloatt = 42.0151;
const myStringg = "44";
const mySting = "42.123abc";

//The Number,isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myString))
// The parseFloat() method parses an argument and return a floating point number. If a number cannot be parsed for the argument, it return NaN(Not a Number).
console.log(Number.parseFloat(myFloatt))
console.log(Number.parseFloat(myStringg))
// When parsing this method removes non-numeric characters and converts other data types to the number data types. 
console.log(Number.parseFloat(mySting))
// The toFixed() method formats a number according to how many decimal point you provide as the parameter.
console.log(Number.parseFloat(mySting).toFixed(5))
// The toFixed() method also rounds up if removing trailling decimals. Also note, this method returns string data and not number data. 
console.log(myFloatt.toFixed(2))
// The parseInt() method  parses an  argument and returns an integer. Like the parse float method. the parseInt method removes non-numeric characters and converts other data types to the number data type.
console.log(Number.parseInt(mySting))
// The toString() method returnss a string representing the number. We can verify this as string data by using the typeof keyword.
console.log(typeof myFloatt.toString())
// for comparison lets also use the typeof keyword with the parse float method to confirm it return a number data type.
console.log(typeof Number.parseFloat(mySting))
// We can get the benefits of several methods at once by chainning them together. chaining is a very common practise. Chaining = Using several method chaining
console.log(Number.parseFloat("4.237abc").toFixed(2).toString())
// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number
// The global isNaN() function determines whether a value is NaN or not
console.log(Number.isNaN("Dave"))

///////////////////////// MATH OBJECT ////////////////////////
// This property return the value of pi.
console.log(Math.PI)
// Math TRUNC returns the integer portion of a number and truncates any decimals.
console.log(Math.trunc(Math.PI))
// The ROUND method returns the value of the number rounded to the nearest integer when applied to pi
console.log(Math.round(3.4)) 
// Ceiling, which is a good memory trigger to let us know it will round the value up.
console.log(Math.ceil(Math.PI)) 
// Floor is also a good memory trigger to remind us the number will be rounded down.
console.log(Math.floor(Math.PI));
// The Powell method takes two argumens the base number and the exponent.
console.log(Math.pow(2, 4))
// The Math.MIN method returns the smallest number from zero or more numbers, separate the numbers we provide to the method with commas
console.log(Math.min(2, 0.5, 9))
// The MAX method return the largest number from zero or more numbers. giving the same numbers, the max method returns min.
console.log(Math.max(2, 0.5, 9))
// The Math.rounded method is both interesting and very useful. It provides a pseudo random number from zero to one.
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
// We can combine the roundom method with another math method to build a javascript expression that will generate a random number from one to.
// We need to add one to our multiplication. If we do not add one , we will get a number from zero to nine
console.log(Math.floor(Math.random() * 10) +1)
console.log(Math.floor(Math.random() * 10) +1)
console.log(Math.floor(Math.random() * 10) +1)
console.log(Math.floor(Math.random() * 10) +1)
// We should choose the floor method instead of the ceil method when generating a random number like we just did.
// the MATH.RANDOM method genarate the number from zero to one which gives it a very slim chance to simply return zero.
// there for using the CEIL method when generating a random number also has a very slim chance to return zero use.
// we should use  the floor method illustrated and we will always generate a number from one to 10. We can also replace 10 with whatever maximum number we want.

//////////////////////////////// CODE CHALLANGE////////////////////
/* Write JAVASCRIPT CODE that will return a random latter from our name */
// 1. Let's start with my name
// 2. we need to return a latter from my name
// 3. what type of data is my name
// 4. did we learn a method that will return  one character from a world?
console.log(typeof("Dave"))
console.log("Dave".charAt())
console.log(Math.floor(Math.random() * 4) +1)
console.log("Dave".charAt(Math.floor(Math.random() * 4)))
console.log("Dave".charAt(Math.floor(Math.random() * 4)))
// Let's make this work for all names
const anyName= "Jonathan"
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))

//////////////////////////////// IF STATEMENTS //////////////////////////
// Conditionals: IF statement
// If the value of soup is false, which can also mean undefined null or equal to zero, our code will skip right over the if statement.
let customerIsBanned = false;
let soup = 'chicken noodle soup';
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!"
}  else if (soup && crackers) {
    reply =`Here's your order of ${soup} & crackers.`; 
} else if (soup) {
    reply =`Here's your order of ${soup}`; 
} else {
    reply = "Sorry, we're out of soup."
}
console.log(reply)

//////////////////
let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = 'A';
} else if (testScore >= 89) {
    grade ='B';
} else if (testScore >= 70) {
    grade = 'C'
} else if (testScore >= 60) {
    grade = 'D'
} else {
    // Nested IF statement
    if (collegeStudent) {
        grade = 'U';
    } else {
        grade = "F "
    }
}
console.log(grade)

///////////////// IF statement rps
// Decition Tree!
/* if (playerOne === computer) {
    // tie game!
} else if (playerOne === "rock") {  
    if (computer === "paper") {
        // Computer Wins
    } else {
        // PlayerOne Wins
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        // Computer Wins
    } else {
        // PlayerOne Wins
    }
} else {
    if (computer === "rock") {
        // computer wins
    } else {
        //playerOne wins
    }
} */

/////////////////////////// SWITCH STATEMENTs//////////////////////
// Conditionals: swith statement
// A SWITCH statement checks an expression or value and then takes a waterfall shape to check any number of possible cases.
// The logical order of the cases is important. If case one is a match, switch statement should be stopped with a break command and never make it to the valuation stage of case.
// After any number of possible cases, switch statement are completed with a default option that is chosen if none of the above casses are a match.
// syntax
switch (Math.floor(Math.random() * 3 + 1 )) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    case 3:
        console.log(3)
        break;
    default:
        console.log("No Match")
}

//////////////////// SWITCH statement rps
let player1 = "paper"
let computer = "rock"

switch (player1) {
    case computer:
        console.log("Tie game!");
        break;
    case 'rock':
        if (computer === "paper") {
            console.log("computer wins!")
        } else {
            console.log("player1 wins!")
        }
        break;
    case 'paper':
        if (computer === "scissors") {
            console.log("computer wins!")
        } else {
            console.log("player1 wins!")
        }
        break;
    default:
        if (computer === "rock") {
            console.log("computer wins!")
        } else {
            console.log("player1 wins!")
        }
        break;
}

///////////////////////// TERNARY OPERATOR////////////////////
// The ternary operator is a three-part tool for making decisions with JavaScript.
// We can think of a ternary operator statement as being shorthand for an FL statement.
// like the IF statement we start with a condition. After the condition we put a question mark if the condition is true. The result of the ternary operation if found here.
// the colon is like the EL in an IF statement. If the condition of the ternary operator is false, the result of the ternary operation is here.
// syntax
// condition ? ifTrue : ifFalse:
let food = "Chicken Fried Rice"
//let response = food ? "Yes, we Have Food" : "Sorry, No Food Today.";
let isCustomerBanned = false;
let foodAccess = isCustomerBanned ? "Sorry, no food for you!"
: food
? `Yes, we have ${food} today.`
: 'Sorry, no food today.';
console.log(foodAccess)

// Grading scale example
let testResult = 79;
let myGrade = 
    testResult > 89
    ? "A"
    : testResult > 79
    ? "B"
    : testResult > 69
    ? "c"
    : testResult > 59
    ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}.`);

////////////// TERNARY rps
let player2 = "scissors"
let computer1 = "paper"
let result = 
    player2 === computer1
        ? "Tie game!"
        : player2 === "rock" && computer1 ==="paper"
        ? "computer wins!"
        : player2 === "paper" && computer1 === "scissors"
        ? "computer wins!"
        : player2 === "scissors" && computer1 === "rock"
        ? "computer1 wins!"
        : "player2 wins!";
    console.log(result)

///////////////////////////// USER INPUT ////////////////////////
//alert('Hello World')
// Boolean Pop-up = True or false value
/*let myBoolean = confirm("Ok === True\nCamcel === False");
console.log(myBoolean) */
// Prompt Pop-up = name value
/* let name = prompt("Pleas enter your name")
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.toUpperCase().trim());
} else {
    console.log("You didn't enter your name")
} */

////////////////////// Intro to LOOP /////////////////////////////////
////// While LOOP
let myNumb3 = 1;
while ( myNumb3 <= 10) {
    console.log(myNumb3)
    myNumb3++; // Post Increment number
}

let name3 = "James";
let counter = 0;
let myLetter;
while (true) {
    myLetter = name3[counter];
    console.log(myLetter)
    if (myLetter === 'e') break;
    counter++;
}

///// Do while LOOP
// DO while loop is very similar to While loop
// With the DO while loop we're going to execute the code block at least once
let num = 50
do {
    console.log(num)
} while ( num > 50)

///// For LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

let name4 = "Eric";
let count = 0;
let myLatter;
while (count <= 3) {
    myLatter = name4[count];
    console.log(myLatter);
    if (count === 1) {
        count +=2;
        continue;
    }
    count++;
}
console.log(count);

let name = 'Dave'
for(name = 1; name <= 4;) {
    console.log(name)
    name++
}
let name1 = 'Jim'
for (let x = 0; x < name1.length; x++) {
    console.log(name1.charAt(x))
}

//////////////////////////////// FUNCTIONS /////////////////////////
//Methods = Declaration syntax
function sum1(num1, num2) {
    console.log(num1)
    console.log(num2)
    return num1 + num2
}
console.log(sum1(2))

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1
    }
    return num1 + num2
}
console.log(sum(3, 8))

function getUserEmail(email) {
    return email.slice(0, email.indexOf('@'));
}
console.log(getUserEmail('UseEmail@mail.com'))

//// Annonymuse function
const getUserNameEmail = function (email) {
    return email.slice(0, email.indexOf('@'))
}
console.log(getUserNameEmail('User@GitHub.com'))
//// Arrow function
const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("dAvE"))

///////////////////////////////// SCOP (var, let, const) ////////////////////////////
//// Var. we can define a variable like X with the keyword VAR and we can log that to the console and see the value just fine.
//// However, VAR doesn't throw an error if we redefine re-declare that same variable.
var x = 1
var x = 2
var x = 4
console.log(x)
///// Let. when we use the keyword LET in attempt to do this, we get an error and that is actually desirable in this case
/* let b = 1
let b = 2
console.log(b) */
///// Now both VAR and LET will allow reassignment.
// So there is no error here because we didn't use the keyword lead again, we just declared the variable once, but then we reassign the value and that's okay.
let q = 1
q = 2
console.log(q)
///// If we use the keyword CONS, this will throw an error. And this makes CONS the preference for most.
//// We want to use CONS whenever we can and then use LET when we know we're going to need to reassign a value.
//// But if we know we won't be reassigning a value CONS is short for constant.
//// just use the keyword CONS, otherwise use, LET and leave VAR for legacy code.

/* const x = 1 
x = 2;
console.log(x) */

//// Now we need to discuss scope and the differences because VAR has a different scopes and really the way it responds to scopes is different then LET and CONS
//// Global Scope
//// The global scope is available to all, it can go in functions and beyond that it can go into other functions that are nested in a function. it can go into blocks if code that are in a function.
var a = 1;
let b = 2;
const c = 3;

/// Function Scope
/// The code values or the variable values can be passed down global into functions, functions into other functions or blocks of code, but they cannot be passed up.
function func() {
    const c = 5;
    console.log(c)
/// Local Scope(block)
    {
        let b = 4
        console.log(b)
    }
}
func()
/// Scope is a concept that is hard to take in and process it at first.
// Global Scope
var x = 1;
let y = 2; 
const z = 3; 

console.log(`blobal: ${x}`);
console.log(`blobal: ${y}`);
console.log(`blobal: ${z}`);

// Function Scope
function myFunc() {
    var x = 10; 
    const z =15 
    //console.log(`function: ${x}`);
    //console.log(`function: ${y}`);
    //console.log(`function: ${z}`);
        // Block Scop
    { 
        var x = 15; // function scope
        const z = 20 // block scope
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myFunc()
// GLOBAL = Not in a function or block. not desirable.
// LOCAL = In a function or block. not global.
// VAR = Instantiates function() scoped variable.
//LET and CONST instantiate {BLOCK} scoped variable. 
///// Avoid using var. Stick with CONST and LET
///// Use CONST unless you need to reassign value.
///// Use let if you know you will reassign value

////////////////////////////// ARRAYS ////////////////////////////////
// Arrays are data structure in JavaScript, and we'll use the analogy as we start out
const myArray = []
// add element to an array
myArray[0] = 'Dave';
myArray[1] = 1962;
myArray[2] = false;
// refer to an array
console.log(myArray);
// Last element in an array
console.log(myArray[myArray.length - 1])
// How do we add something to our array
myArray.push('School')
console.log(myArray)
// Separate the list item
const lastItem = myArray.pop()
console.log(lastItem)
// How to remove 
myArray.pop()
console.log(myArray)
// Add in first line
myArray.unshift(42)
console.log(myArray)

const firstItem = myArray.shift()
console.log(firstItem);
console.log(myArray)
console.log(myArray[1])
// To delete an Item
/* delete myArray[1];
console.log(myArray)
console.log(myArray[1]) */ // Undefined

// Spice can be use to delete,can be user to replace
console.log(myArray)
console.log(myArray.splice(1,1))

myArray.splice(1, 0, 52)
console.log(myArray)
console.log(myArray[1])

const newArray = ['A','B','C','D','E', 'F', 'G'];
const Array = newArray.slice(2)
console.log(Array)

const tryArray = ['A','B','C','D','E', 'F', 'G'];
const theArray = tryArray.slice(2, 6)
console.log(theArray)

const testArray = ['A','B','C','D','E', 'F', 'G'];
testArray.reverse()
console.log(testArray)

const sumArray = ['A','B','C','D','E', 'F', 'G'];
const newString = sumArray.join()
console.log(newString)

const sumArray1 = ['A','B','C','D','E', 'F', 'G'];
const newStringg = sumArray1.join()

const runArray = newStringg.split(",")
console.log(runArray)

const sumArrayA = ['A','B','C','D']
const sumArrayB = ['E', 'F', 'G'];
const ourArray = sumArrayB.concat(sumArrayA) // concat join array
console.log(ourArray)

const sumArrayA1 = ['A','B','C','D']
const sumArrayB2 = ['E', 'F', 'G'];
const Arrayy = [sumArrayA1, sumArrayB2] // seperate arrays
console.log(Arrayy)

const ArrayA = ['A','B','C','D']
const ArrayB = ['E', 'F', 'G'];
const spreadArrayy = [...ArrayA, ...ArrayB] // seperate arrays
console.log(spreadArrayy)

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golfball", "tennis ball"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat top", "sweat pants", "hoodies"]

console.log(equipShelfA[1])
//or
console.log(clothesShelfB[0])

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0])

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

//////////////////////////////// OBJECT //////////////////////////////
// key-value pairs in curly braces
const myObj = {name: "Dave"}
console.log(myObj);
// To get the key value
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 45,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `Time for ${this.beverage.morning}`;
    }
}
console.log(anotherObj.alive)
console.log(anotherObj["answer"]) // another way of calling obj
console.log(anotherObj.action())

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooooon!";
    }
}
/* const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck)
console.log(truck.wheels)// Inheritance
console.log(truck.engine()) */

const car = Object.create(vehicle);
    car.doors = 4;
    car.engine = function() {
        return "Whooooooosh!";
    };
console.log(car.engine())
console.log(car.wheels)
  
const tesla = Object.create(car);
console.log(tesla.wheels)
console.log(tesla.engine())

tesla.engine = function() {
    return "Shhhhhh...";
};
console.log(tesla.engine())

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drum: "John Bonham"
};

delete band.drum;
console.log(band.hasOwnProperty('drum'))

console.log(Object.keys(band))
console.log(Object.values(band))

for (let job in band) {
    console.log(band[job])
}
// For in Loop
for (let job in band) {
    console.log(`on ${job}, it's ${band[job]}!`)
}
// Destructuring objecct
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass)

function sings({vocals}) {
    return `${vocals} sings!`;
}
console.log(sings(band));

//////////////////////////////// CLASSES /////////////////////////////
// ._id, Means this is a private property. Don't access this with out a Getter and a Setter.
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType
        this.size = pizzaSize
        this.crust = "original"
    }
    bake() { // method
        console.log(`Baking a ${this.size} ${this.type} ${this.crust}  crust pizza.`)
    }
}                         // passing in parameter
const myPizza = new Pizza("Peperoni", "tin");
myPizza.bake();

class Pizz {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "Original"
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
}
// Child Classes
class SpecialtyPizza extends Pizz {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "Work";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
    }
}
const mySpecialty = new SpecialtyPizza('medium');
mySpecialty.slice();

// Factory Function
function pizzaFactory(pizzaSize) {
    const crustt = "Original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`We Baked a ${size} ${crustt} crustt pizza.`)
    };
}
const myPizz = pizzaFactory('small');
myPizz.bake(); 

// Naming Conventions
class Pie {
    crust = "Original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    hereYouGo() {
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pie.`
        );
    }
}
const myPie = new Pie('Large');
myPie.hereYouGo();
console.log(myPie.crust)// public class

//////////////////////////////// JSON ///////////////////////////////
// JSON: JavaScript Object Notation
/* JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many language...not just in JavaScript. */

const myObjt = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    act: function() {
        console.log("Hello")
    }
}
console.log(myObjt)
console.log(myObjt.hobbies)
myObjt.act()
console.log(typeof myObjt)

const sendJSON = JSON.stringify(myObjt)
console.log(sendJSON)
console.log(typeof sendJSON)

const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
console.log(typeof receiveJSON)

//////////////////////////////// ERROR //////////////////////////////
// JavaScript Error and Error handling
const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if(i % 2 !== 0) {
                throw new Error("Odd number");
            }
            console.log("Even number!");
        } catch (err) {
            console.error(err.stack);
        } finally {
            console.log("...finally");
            i++;
        }
    }
};
makeError();

const view1 = document.getElementById("view1");
console.log(view1);   

















