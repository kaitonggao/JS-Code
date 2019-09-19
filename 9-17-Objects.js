 
////////****Objects And Methods

//collects or states a bunch of info for something ex: a song! or... a pokemon!

//this. You must state this.age because the variables you are referrring to are not stated before, it is stated in the {} and thus can only be called if you use this.
// use if you need to "return" a variable

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
        return 2019 - this.age; //this calls variables stated in your const/function
        }
}


//console.log(hero.alias);
//console.log(hero.location.city);

const superMan = Object.create(hero); //create a new hero based off hero, called superMan
superMan.alias ='Superman';
superMan.firstName = 'Clark';

console.log(superMan);

