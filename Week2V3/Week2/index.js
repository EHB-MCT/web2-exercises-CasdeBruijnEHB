'use strict';

import team from './team.js';

console.log("test");

let arrPokemons = [];
let testArr = [];

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
        .then(response => {
            return response.json();
        })
        .then(data => {
            
            data.results.forEach(element => {
                //TWEEDE FETCH VOOR MEER INFO
                fetch(element.url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        //console.log("data twee", data);
                        //console.log("id ", data.types
                        testArr.push(data.name);
                        arrPokemons.push(new Pokemon(data.name, data.id, data.sprites.front_default, data.types));
                    });
            });
        });

}
fetchData();
displayData();

function displayData() {
    console.log("DATA ", arrPokemons);
    let team1 = new team();

    //Team oefening
    document.getElementById('team').innerHTML = team1.describe();
    console.log("Describe", team1.describe);


}


function displayHTML() {

    let html;
    for (let i = 0; i < arrPokemons.length; i++) {
        html += `
        <img src="${arrPokemons[i].image}" alt="">
        <p class="number">${arrPokemons[i].number}</p>
        <h3>${arrPokemons[i].name}</h3>
        `;

        //Type toevoegen
        for (let y = 0; y <= arrPokemons[i].type.length; y++) {
            html += `
            <div>
            <p class="type1" id="${arrPokemons[i].type[y]}>${arrPokemons[i].type[y]}</p>
        </div>
        `;
        }
        //Button toevoegen op het einde
        html += `<button id="add">Button</button>`;
    }


}