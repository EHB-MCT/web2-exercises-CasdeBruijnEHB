"use strict";

//Time wasted application

const APIkey = "4492c6b";

let html;

async function getData(title) {
    //let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIkey}`);
    let response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${APIkey}`);
    let data = await response.json();
    console.log(data);
    console.log("Title:", data.Title);
    console.log("Year:", data.Year);
    console.log("Director:", data.Director);
    console.log("Runtime:", data.Runtime);
    console.log("Poster:", data.Poster);

    
    html = `
        <h2 id="movietitle">Title: ${ data.Title}</h2>
        <p id="director">Director: ${ data.Director}</p>
        <p id="runtime">Runtime: ${ data.Runtime}</p>
        <p id="jaar">Year: ${ data.Year}</p>
        <img src="${data.Poster}" alt="">
        `;
    document.getElementById('movieForm').innerHTML = html;


}

document.getElementById("btnSearch").addEventListener("click", function (event) {

    let val = document.getElementById('inputValue').value;
    console.log("Value click", val);
    getData(val);

});