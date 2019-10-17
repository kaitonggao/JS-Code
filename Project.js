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
  displayCats(e) {
    if(userCats.value == '') {
    alert("Please input a Value");
    } else {
    let html = ' <div class="display-cats"><div class="display-species">%species%</div><div class="display-markings">%markings%</div><div class="display-colors">%colors%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-avenger"><p class="remove-avenger"> Remove Avenger  &#9822;  </p></div></div> ';
    let newHtml = html.replace('%species%', cats.species);
    newHtml = newHtml.replace('%powers%',  cats.markings);
    newHtml = newHtml.replace('%name%', cats.colors);
    display.insertAdjacentHTML('beforeend', newHtml);
    //console.log('help');

    e.preventDefault();
    clearValues();

    
}
}



}

    //push into array
  addCats() {
    movies.push(species, markings, color);

}

addCats('tiger', 'stripes','black and orange');

removeAvenger(e){
    if(e.target.parentElement.classList.contains('remove-avenger')){
    if(confirm('Are You Sure?')) {
    e.target.parentElement.parentElement.remove();
    //console.log(e.target.parentElement);
    }
    }

}

//SEPERATE FROM CLASS - EVENT LISTENER
// you're getting your values and then defining it!
document.getElementById("form").addEventListerner("submit",function(e){
   //GET CONST
    const species = document.querySelector('#species'); //could also getElementById
    const markings = document.querySelector('markings');
    const colors = document.querySelector('#colors');
   
    //get const and make a new ablum from it.
    const album = new album(species, markings, colors);

    const ui = new UI();
    console.log(ui);
    
    


}



/*
//event listener if something happens, then it will make the following functions work.

function eventListeners(){
    form.addEventListener('submit', displayCats);
    display.addEventListener('click', removeCats);
}

eventListeners();




//remove avenger 
*/