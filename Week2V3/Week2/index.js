'use strict';

console.log("test");

let arrPokemons = [];
let newPokList = [];

class Pokemon {
    constructor(name, number, image, type) {
        this.name = name;
        this.number = number;
        this.image = image;
        this.type = type;

    }
}

function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            console.log("test");
            data.results.forEach(element => {
                //arrPokemons.push(element);

                //TWEEDE FETCH VOOR MEER INFO
                fetch(element.url)
                    .then(response => response.json())
                    .then(data => {
                        //console.log("data twee", data);
                        //console.log("id ", data.types);
                        arrPokemons.push(new Pokemon(data.name, data.id, data.sprites.front_default, data.types));
                        newPokList.push(element);
                    });
            });
        });

}
fetchData();
displayData();

function displayData() {
    console.log("DATA ", arrPokemons);
    console.log("Data2 ", newPokList);
    /*
    let html = "";
    let arrayLengte = arrPokemons.length;
    console.log(arrayLengte);
    */


}