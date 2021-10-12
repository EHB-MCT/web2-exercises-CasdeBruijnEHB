"use strict";


console.log("test");
//Random Number generator
let randomNumber;

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//console.log(random(0, 20));
randomNumber = random(0, 20);


//Vergelijk functie bij klik

document.getElementById("btnOne").addEventListener('click', function (event) {
    let val = document.getElementById('inputValue').value;
    console.log("inputvalue:", val);
    console.log("randomvalue", randomNumber);



    compareNumber(val);

});



function compareNumber(nr) {
    let promise = new Promise(function (resolve, reject) {
        if (nr == randomNumber) {
            resolve("You have guessed the number!");
        } else if (nr <= randomNumber) {
            reject("The number is higher. Guess again!");
        } else if (nr >= randomNumber) {
            reject("The number is lower. Guess again!");
        } else if (isNaN(nr)) {
            new Error("Foute ingave");
        }
    });

    promise.then(
        result => alert(result),
        error => alert(error)
    );

    console.log(nr);
}