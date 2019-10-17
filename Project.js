//abstraction when computer does work. like colors Hexdecimal
// method is a function inside a function
// objects enclose functions class is an object

class cats {
    constructor(species, markings, colors){
        this.species = species;
        this.markings = markings;
        this.colors = colors;
    }
    classify(){
        return "A " + this.species + " has " + this.markings + " and is " + this.colors;
    }
}



//Instead of a function you use class 

/* function Avenger(alias, identity, powers, firstAppearance){
    this.alias = alias;
    this.identity = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.firstAppearance;
    }
} */

// Put UI all the things that students input.banner


class UI {
    userInput(cats){
const species = document.querySelector('#species'); //could also getElementById
const markings = document.querySelector('markings');
const colors = document.querySelector('#colors');
    }

}

    //push into array
function addCats() {
    movies.push(species, markings, color);

}

addCats('tiger', 'stripes','black and orange');

document.getElementById('form').addEventListerner('submit',function(e){
    const goes here???
    also element 
    and UI?
    all my fuuctions.


}

);


//event listener if something happens, then it will make the following functions work.

function eventListeners(){
    form.addEventListener('submit', displayCats);
    display.addEventListener('click', removeCats);
}

eventListeners();



function displayAvengerMember(e) {
    if(userCats.value == '') {
    alert("Please input a Value");
    } else {
    let html = '<div class="display-avenger"><div class="display-alias">%alias%</div><div class="display-powers">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%years%</div><div class="display-image"><img src=%url% alt=""></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    //console.log('help');

    e.preventDefault();
    clearValues();

    
}
}

//remove avenger 

function removeAvenger(e){
    if(e.target.parentElement.classList.contains('remove-avenger')){
    if(confirm('Are You Sure?')) {
    e.target.parentElement.parentElement.remove();
    //console.log(e.target.parentElement);
    }
    
}

function init(){
    userAlias.value = '';
    userFullName = '';
    userPowers.value = '';
    userFirstAppearance.value = '';
    userImage.value = '';
}


init()

//displayAvengerMember();


function clearValues() {
    document.getElementById("hero-form").reset();
}

clearValues();

