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

/*const massRob = 78;
const massDejon = 92;
const heightRob = 1.69;
const heightDejon = 1.95;

let BMIRob = massRob/(heightRob * heightRob);
let BMIDejon = massDejon/(heightDejon * heightDejon);

console.log (`Rob's BMI is ${BMIRob}.`) ;
console.log (`Dejon's BMI is ${BMIDejon}.`) ;

let Dejonhigher = BMIDejon > BMIRob; //boolean example - a statement that is either true or false //

console.log (`Dejon's BMI is higher than Rob's? ${Dejonhigher}.`) ;
*/

/*let firstName = 'Paul';
let status = 'single';

if (status === 'single'){
    console.log(`${firstName} is single and ready to mingle.`);
} else{
    console.log(`Someone made a big mistake with ${firstName}`);
}

//triple equal means strict! o: //

const massRob = 78;
const massDejon = 92;
const heightRob = 1.69;
const heightDejon = 1.95;

let BMIRob = massRob/(heightRob * heightRob);
let BMIDejon = massDejon/(heightDejon * heightDejon);

if(BMIDejon > BMIRob){
    console.log('Dejon is heavier :V');
} else {
    console.log(`Rob is heavier :<`)
}
let firstName = 'Sarah';
let age = 17;

if(age<13) {
    console.log(`${firstName} is a young girl`);
} else if (age<20) {
    console.log(`${firstName} is a teenage.. ugh`);
} else if (age >=20 && age<30) {
    console.log(`${firstName} is a young woman `);
} else {
    console.log ('She a boomer');
}

let firstName = 'Kai';
let grade = 4;
let freshman = 1;
let sophmore = 2;
let junior = 3;
let senior = 4;

if(grade>3) {
    console.log(`${firstName} needs to worry about college :<`)
}


//9/12/19 Ternary Operators

//Ternary Operator --> Cleaner way of writing an if/else statement 

let firstName = 'Melkadzez';
let age = 17;

age >= 18 ? console.log(`${firstName} will drink alcohol.`) : console.log(`${firstName} will drink orange juice! `)

//condition? exprIfTrue : exprIfFalse

/////falsey values: null, 0 , undefined, '' , NaN
///truthy values : Anything not above this line.

let height = 22;
if (height == '22') {
    console.log (`Hey this is a type coercion!`);
} else {
    console.log (`No type coercion with triple ===`)
}*/

////functions

/*function calculateAge(birthYear){
    return(2019 - birthYear)
}*/

//This function calculates Age, if you provide the birthYear.  Then it uses the birth year provided as seen in illustration.

/*functionCall(argument goes here);
const ageGallo = calculateAge(2002);
const ageIlsa = calculateAge(2003);
const ageThami = calculateAge(2004);

//console.log(ageGallo, ageIlsa, ageThami); =

let firstName = 'Brendan'
function yearsUntilRetire(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    console.log(`${firstName} retires in ${retirement}`);
}

*/

//9/13/19 : Functions Lesson + Arrays.

//function whatDoYouDo(job,firstName){}; Function declaration without definition/XPathExpression.//

//case = situation // return= what happens, sends it.
//let "function name"//
//function, write varable type and these will be defined in console.log//
//switch(x) = different cases of x will produce...//

/*let whatDoYouDo = function(job, firstName){
    switch(job) { 
        case 'teacher':
            return firstName + ' teaches childern';
        case 'driver':
            return firstName + ' drives people';    
        case 'designer':
            return firstName + ' design things';
        default: 
            return firstName + ' is broke and homeless yokes.';
        }
}

console.log(whatDoYouDo('teacher', 'Thami'));
console.log(whatDoYouDo('driver', 'Veda'));
console.log(whatDoYouDo('designer', 'Kai :>'));
console.log(whatDoYouDo('default', 'Rob'));
*/

///******* */Arrays

//Array example:

let name = ['Brian', 'Andrew', 'Winny', 'Kai'] // array list of strings/names
let numbers = [1,25,6,7,8] //array list of numbers
let crazyArray = ['string', 203, true];

//how to call an Array: 

// console.log(`Hello ${name[0]}!`) //remember first term in an array is 0!
// console.log(name.length); //length tells you number of arrays.

//el = element //forEach = lists each element

/* name.forEach(function(el){
    console.log(el)
}
)*/

name.push("Melkadze");