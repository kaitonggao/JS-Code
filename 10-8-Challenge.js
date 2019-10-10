// make class with age and name, calculate date of birth and instigate Winny

class Person {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    calculateBirthYear(){
        return (new Date().getFullYear() - this.age);
    }
}

        
    const Winny = new Person (17, 'Winny');
    console.log(Winny);
    console.log(Winny.calculateBirthYear());

    