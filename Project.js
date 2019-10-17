//abstraction when computer does work. like colors Hexdecimal
// method is a function inside a function
// objects enclose functions class is an object

class Cats {
    constructor(species, markings, colors){ //constructor(userSpecies); 
        this.species = species; // this.species = userSpecies;
        this.markings = markings;
        this.colors = colors;
        this.url = url;
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


class UI {

    displayCats(cats) {
      if(userCats.value == '') { 
          alert("Please input a Value");
      } 
      
      else {
      let html = ' <div class="display-cats"><div class="display-species">%species%</div><div class="display-markings">%markings%</div><div class="display-colors">%colors%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-avenger"><p class="remove-avenger"> Remove Avenger  &#9822;  </p></div></div> ';
  
      let newHtml = html.replace('%species%', cats.species);
      newHtml = newHtml.replace('%markings%',  cats.narkings);
      newHtml = newHtml.replace('%colors%', cats.colors);
      newHtml = newHtml.replace('%url%', cats.url)
      display.insertAdjacentHTML('beforeend', newHtml);
      //console.log('help');
      clearValues();
      }
      }
  }

  


//EVENT LISTENER -> takes your form values and defines it as variables you will call in class UI

document.getElementById("form").addEventListener("submit",function(e){

    //GET CONST
     const species = document.querySelector('#species'); //gets info from the section which is labeled id="species" . This info is now called userinputSpecies
     const markings= document.querySelector('#markings');
     const colors = document.querySelector('#colors');
     const url= document.querySelector('#image');

     //if something is grey that means that it hasn't been called in your section yet.

     //get const and make a new object category from it.
     const cats = new Cats(species, markings, colors);
 
     const runUI= new UI(); // runs your UI for your new inputs.
     console.log(runUI);

     runcode.displayCats(cats);
     
     e.preventDefault();
     
 
 }
 

 
/*
 //push into array
  addCats() {
    movies.push(species, markings, color);

}


//event listener if something happens, then it will make the following functions work.

function eventListeners(){
    form.addEventListener('submit', displayCats);
    display.addEventListener('click', removeCats);
}

eventListeners();




//remove avenger 
*/