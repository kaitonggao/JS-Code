class Album {
    constructor(title, artist, yearReleased){
        this.title = title;
        this.artist = artist;
        this.yearReleased = yearReleased;
    }
    calculateAge(){
        return (new Date().getFullYear() - this.yearReleased);
    }
}
    /*calculateAge(){
        return (new Date().getFullYear() - this.yearReleased);
    }*/
    // calculateAge () = ( yearReleased => newDate().getFullYear() - yearReleased);

        
    const abbeyRoad = new Album('Abbey Road', 'The Beatles', 1969);
    //const srgtPepper = new Album('sgt pepper', 'Beatles', 1970);
    console.log(abbeyRoad);
    console.log(abbeyRoad.calculateAge()); //you can't do calculateAge() by itself b/ it doesn't know values. only if you use abbeyRoad.calculateAge() will it

    class CD extends Album {
        constructor(title, artist, yearReleased, digital){
            super(title, artist,yearReleased); //super takes values already stated and lists them again so you don't have to rewrite it.
            this.digital = digital;
        }
    }
    