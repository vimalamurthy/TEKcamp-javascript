//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}

//your code...
let i=0;
while (i<10){
    console.log(" the value of i in the loop is : " + i);
    i++;
}

/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
// use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. 
// run all the functions after defining them, and print the answer to the console.

//your code...
function product(){
    return ((2+30)*20);
}

function product1(a){
    return (a/10**2);
}
console.log("The result is : " +product1(product()));


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  
//console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""
var value = 20;
if (value){
    console.log(`${value} is truthy - value of 20 assigned is truthy`);
} else{
    console.log(`${value} is falsy`);
}

value=0;
if (value){
    console.log(`${value} is truthy`);
} else{
    console.log(`${value} is falsy - value of 0 is falsy`);
}

value="zero";
if (value){
    console.log(`${value} is truthy - "zero" is a string`);
} else {
    console.log(`${value} is falsy`);
}

const zero = 20;
if (zero){
    console.log(`${value} is truthy - 20 is the value of constant named zero`);
} else {
    console.log(`${value} is falsy`);
}

value=null;
if (value){
    console.log(`${value} is truthy`);
} else {
    console.log(`${value} is falsy - null is falsy`);
}
    
value="0";
if (value){
    console.log(`${value} is truthy ="0" is a string`);
} else {
    console.log(`${value} is falsy`);
}

value= !"";
if (value){
    console.log(`${value} is truthy - Empty string returns falsy, so the !"" Boolean returns true.`);
} else {
    console.log(`${value} is falsy`);
}

value={};
if (value){
    console.log(`${value} is truthy - Object is assigned to value`);
} else {
    console.log(`${value} is falsy`);
}

value = () => {console.log("hello TEKcamp!");}
if (value){
    console.log(`${value} is truthy - Function return value is assigned to value`);
} else {
    console.log(`${value} is falsy`);
}

value=125;
if (value){
    console.log(`${value} is truthy - Assigning a value to the variable`);
} else {
    console.log(`${value} is falsy`);
}

value=undefined;
if (value){
    console.log(`${value} is truthy`);
} else {
    console.log(`${value} is falsy - value that is undefined is falsy`);
}

value="";
if (value){
    console.log(`${value} is truthy`);
} else {
    console.log(`${value} is falsy - Empty string is falsy`);
}

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

switch (day){
    case "monday":{
        console.log("we got a long week ahead of us...");  
        break;
    }
    case "tuesday":{
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");  
        break;
    }
    case "wednesday":{
        console.log("We are smack dab in the middle of the week");  
        break;
    }
    case "thursday":{
        console.log("Thursday night... the mood is right");  
        break;
    }
    case "friday":{
        console.log("TGIF.  Friday truly is the best day of the week!");  
        break;
    }
    default:{
        console.log("It's a weekend!");
    }
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}


(age>21) ? console.log("adult") : console.log("minor");

(age > 13 && age < 19) ? console.log('teen') : console.log("not a teenager");

(age>65) ? console.log("retired") : console.log("still working...");

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  
//Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize 
the 'this' keyword.
*/

//your code...
var aboutMe ={
    name:"Vimala",
    age:"44",
    gender:"female",
    hobbies:["gardening","travelling"],
    profession:"student",
    education:"MCA",
    learn: function(){
        this.fullname = this.name +" Murthy";
        return (this.fullname);
    },
    printHobby: function(){
        this.fullname = this.name +" Murthy";
        console.log(`Hobbies of ${this.name} are `);
        for (var i=0; i<this.hobbies.length; i++)
            console.log(`\t ${this.hobbies[i]} `);
    }
};
console.log(`My name is ${aboutMe.learn()}`);
aboutMe.printHobby();

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of 
//properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back 
//to one of the properties you defined on this object literal.  

//your code...
var myplant={
    name:"Tomato",
    variety:["Determinate","Indeterminate"],
    isFruit:true,
    printPlant: function(str, ht){
        this.type=str;
        this.height=ht;
        if (this.height>=5)
            console.log(`${this.type} is an ${this.variety[1]} variety of ${this.name}`);
        else 
            console.log(`${this.type} is a ${this.variety[0]} variety of ${this.name}`);
    },
    produce: function(value){
        if (value == this.variety[0])
            console.log(`The ${this.variety[0]} produces all summer long..`);
        else if (value == this.variety[1])
            console.log(`The ${this.variety[1]} produces fast but short time..`);
    }
};
myplant.printPlant("Beefsteak",6);
myplant.printPlant("Cherry", 3);
myplant.produce("Determinate");


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
var dataTypes = ["String", "Number" ,"Object"];
function myFav() {
 
    for (var i=0; i<=2; i++){
        switch (i){
            case 0:
                console.log(`${dataTypes[i]} - It adds more understanding to grouping & display values`);
                break;
            case 1:
                console.log(`${dataTypes[i]} - all manipulations are possible only with numbers`);
                break;
            case 2:
                console.log(`${dataTypes[i]} - a data structure that takes programming to the next level`);
                break;
        }
    }
}
myFav();


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...

function multiple(x){
    return function fn(y){
        return (x*y);
    }
}
var result=multiple(5)(3);
console.log(`The result : ${result}`);

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...
function stockGain(basis){
    let message =" is how much the stock has increased";
    return function(yrs){
        let r =.05;
        console.log(`${(basis*r*yrs)}${message}`);
        return (basis*r*yrs);
    }
}
futureValue = stockGain(100)(2);
console.log(`Future value of the stock is ${futureValue}`);
