/*const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    },2000);
}

const first = () => {
    console.log('Hey there');
    second(); // get data from api
    console.log('The end');
} */

// api = a library 

//Whalen teaches us to how get data from an API, in this case data from a pokemon

/* function getPkmn(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') // use fetch to get a promise of the info
    .then(result => result.json()) //.then follows after the fetch and use arrow function to write what you're doing with it.
    .then(data => console.log(data.abilities));
}*/

getPkmn();

async function getPkmn(){
    try { 
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await result.json();
        console.log(data);

    } catch(error){
        console.log(error);
    }
}

getPkmn();