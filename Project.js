//abstraction when computer does work. like colors Hexdecimal

class cats {
    constructor(species, size, colors){
        this.species = species;
        this.markings = markings;
        this.colors = colors;
    }
    classify(){
        return "A " + this.species + " has " + this.markings + " and is " + this.colors;
    }
}

const tiger = new cats('Tiger', 'stripes', 'orange and black');

console.log(tiger.classify());