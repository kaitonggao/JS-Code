//////////**** */ LOOPS/Iterations
 
/*const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
} 

//for loop -> for every element in cars (i++), it will console.log it : cars[i]


cars.forEach(function(car){
    console.log(`${car}`);
})

//cars.forEach has replaced for loops

*/

////HOISTING, SCOPE, EXECUTION STACK AKA JAVASCRIPT
// Execution context: you start at top! Not bottom.

//test1() // Runs the function aka console.log (because that's what's in a function) 
//function = a set of steps you want your variables/const to take

//excution stack. If you do not call test 1, which is the first thing stated. The rest does not happen. Or the top thing runs first ig
/* function test1(){
    console.log('test1');
    function test2(){
        console.log('test2');
        function test3(){
          console.log('test3')

          }
          test3()
    }
    test2(); // calling function
}
test1(); */

//test1(); // a function doesn't need to be stated first (in order) before it is called
//notHoisted(); // a variable or a constant does need to be stated first (aka can only be run if it is stated first (in order))
/* 
function test1(){
    console.log('this is hoisted?');

}

const notHoisted = function(){
    console.log('I am not hoisted');
}

notHoisted(); */

// if you just state "();" after your function that immediately runs it.

//////THIS KEYWORD
/* 
function test(){
    console.log(this);
}

test(); */


const hero= {
    alias: 'Spiderman',
    firstName: 'Peter',
    lastName: 'Parker',
    age: 16,
    goodGuy: true,
    location:{
        state: 'NY',
        city: 'NYC'
    },
    getBirthYear: function(){
       // return 2019 - this.age; //this calls variables stated in your const/function
        console.log(this); // you get the objects in your const if you console.log(this)
        }
}

hero.getBirthYear();

function Hero(alias, powers, age){
    this.alias = alias;
    this.powers = powers;
    this.age = age;
}

const batman = new Hero('Batman', 'Wealthy', 44)
console.log(batman);