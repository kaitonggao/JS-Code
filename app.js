/////////Primitives 
/* let numbers = 4; //let values can be changed, const can't
numbers = 5;
let numbersArrays = [1,2,3,4,5]
console.log(numbers);

let string = 'string';
let strings = "strings";

let boolean = true; //also false */

////////////

/*const firstName = 'Rob';
const job = 'Student';
const birthYear = 2002;
let isMarried = false;

console.log(`Hello my name is ${firstName}, I am a ${job}, I was born in ${birthYear} and am I married? ${isMarried}`); */

/*const now = new Date().getFullYear();
const yearIlsa = 2003;
let fullAge = 18;
let isFullAge = now - yearIlsa >= fullAge;
//console.log(isFullAge);
let ageWill = now - 2002;
let ageNick = 18;
let averageAge = (ageNick + ageWill) / 2;
console.log(averageAge);
*/

/*Rob and Dejon are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
Rob: 78kg, 1.69 meters
Dejon: 92kg, 1.95 meters
1. Store Rob and Dejon's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Rob has a higher BMI than Dejon.
4. Print a string to the console containing the variable from step 3. (Something like "Is Rob's BMI higher than Dejon's? true").*/

const massRob = 78;
const massDejon = 92;
const heightRob = 1.69;
const heightDejon = 1.95;

let BMIRob = massRob/(heightRob * heightRob);
let BMIDejon = massDejon/(heightDejon * heightDejon);

console.log (`Rob's BMI is ${BMIRob}.`) ;
console.log (`Dejon's BMI is ${BMIDejon}.`) ;

let Dejonhigher = BMIDejon > BMIRob; //boolean example - a statement that is either true or false //

console.log (`Dejon's BMI is higher than Rob's? ${Dejonhigher}.`) ;
