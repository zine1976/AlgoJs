var start = "HelloWorld In Js From Script";
var page='<html><body><p id="demo"></p></body></html>';
console.log(start,page);


// Code d'el Roliste
var dice = [0,0];
const change = document.getElementById('ResultDice');

function Dice(){
    for (let test = 0; test < dice.length; test++) {
        dice[test] = Math.ceil(Math.random()*6);
    }
    var result = "Result of dice: "+dice.join(' ,');
    change.innerHTML= result;
}


// getElementById('demo').innerHTML= page;
