//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be 
//true, otherwise it should return false. 
//your code...
function emptyString(str){
    if (str=="")
        console.log("true");
    else
        console.log("false");
}
emptyString("");

/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output 
//uses the new word instead (e.g., ‘Learning JavaScript is cool!). 
//your code...

var str ="Learning JavaScript is fun!";
var replacestr=str.replace("fun","cool");
console.log(replacestr);


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value 
//of each number from the first array. Use an arrow function and one of the built-in array methods. 
//your code...
function calculate(){
    let arr=[];
    let sqArr=[];
    let z= (x) => x*x;
    for (let i=0; i<=5; i++){
      arr.push([i]);
      let temp=z(arr[i]);
      sqArr.push(temp);
    }
    console.log("The array " +arr);
    console.log("Output Array " +sqArr);
  }  
  calculate();

/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript 
//program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in 
//array methods.

//your code...

let numArr=[1,3,5,7,9,1,3,5];
let newArr=[];
let temp;
let z= (x) => {if (x>3) {newArr.push(x)} };
for (let i=0; i<=numArr.length-1; i++){
  let val = z(numArr[i]);
}
console.log("The Output Array " +newArr);

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those 
//numbers. Use an arrow function and one of the built-in array methods. 

//your code...

let myArr=[];
let sum =0;
let z= (x) => sum+=x;
for (let i=0; i<5; i++){
  myArr.push(Math.floor(Math.random()*100));
  z(myArr[i]);
}
console.log(`The input array is ${myArr} and the sum is ${sum}`);

/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For 
//example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

//your code...

let newString ="GCTA";
let newArr=[];
for (let i=0; i<newString.length; i++){
  newArr[i]=newString.charAt(i);
}
console.log("The input string is : " +newString);
for (let i=0; i<newArr.length; i+=2){
  let temp=newArr[i];
  newArr[i]=newArr[i+1];
  newArr[i+1]=temp;
}
console.log("The complementary array is : " +newArr);

/************************************************************* */
// Problem 7:
// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  
//Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to 
//perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];
var parsedArray=[];
function maxNumber(numbers) {
  
  let max=0;
  let dataArray=["one", "two", "three", "3"];

  for (let i=0; i<numbers.length; i++){
    if (typeof numbers[i] === 'number'){
      parsedArray.push(numbers[i]);
    }  
    else if (typeof numbers[i] === 'string'){
       for (let j=0; j<dataArray.length; j++){
          if (numbers[i]==dataArray[j]){
             parsedArray.push(numbers[i]);
          }
       }
    }
  }
  
  for (let i=0; i<parsedArray.length; i++){
      if((parsedArray[i]>max)||(parseInt(parsedArray[i]>max))){
        max=parsedArray[i];
      }
      else if (parsedArray[i]=="3") {
        let temp= 3;
        parsedArray[i]=temp;
        if (temp>max){
          max=temp;
        }
      }
      else if (parsedArray[i]=="one"){
        let temp=1;
        parsedArray[i]=temp;
        if (temp>max){
          max=temp;
        }
      }
      else if (parsedArray[i]=="two"){
        let temp=2;
        parsedArray[i]=temp;
        if (temp>max){
          max=temp;
        }
      }
      else if (parsedArray[i]=="three"){
        let temp=3;
        parsedArray[i]=temp;
        if (temp>max){
          max=temp;
        }
      }
    }
  console.log(`The parsedArray is ${parsedArray}`);
  console.log(`Max Value is ${max}`);
}
maxNumber(numbers);


// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
  numbers.sort(function(a, b){return a - b});
  console.log(numbers);
};
sortNums(parsedArray);

/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the 
//value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of 
//code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} 
//exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  
//Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
    let reverseArr=[];
    for (let i=ones.length-1; i>=0; i--){
        reverseArr.push(ones[i]);
    }
    console.log(reverseArr);

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should 
//return the output of the callback function.

//This performs a square function

function performer(cb){
  var i=5;
  var temp = (cb(i));
  return temp;
}
function sqfunc(x){
  return x*x;
}
function addfunc(x){
  return x+x;
}
var result=performer(sqfunc);
console.log("The square function returns : " +result);
var addresult=performer(addfunc);
console.log("The add function returns : " +addresult);

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what 
//the feature is and why it is useful.

//ES6 Multiline Strings using backtick;

var poem = `The woods are lovely, dark and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep` ;
console.log(poem);