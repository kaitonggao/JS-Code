 
////////****Objects And Methods

//collects or states a bunch of info for something ex: a song! or... a pokemon!

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
        return 2019 - this.age; //this is calling back
    }
}


//console.log(hero.alias);
//console.log(hero.location.city);

const superMan = Object.create(hero); //create a new hero based off hero, called superMan
superMan.alias ='Superman';
superMan.firstName = 'Clark';

console.log(superMan);