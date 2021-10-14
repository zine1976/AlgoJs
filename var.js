var start = "HelloWorld In Js From Script";
var page='<html><body><p id="demo"></p></body></html>';
console.log(start,page);


// Code d'el Roliste
var dice = [0,0];
const changeRoll = document.getElementById('ResultDice');

function Dice(){
    for (let test = 0; test < dice.length; test++) {
        dice[test] = Math.ceil(Math.random()*6);
    }
    var result = "Result of dice: "+dice.join(' ,');
    changeRoll.innerHTML= result;
}

// Code d'el Roliste Easter egg
changeRoll.onclick = function e() {
    ColorDice()
};
function ColorDice(){
    var red = Math.ceil(Math.random()*256)-1;
    var green = Math.ceil(Math.random()*256)-1;
    var blue = Math.ceil(Math.random()*256)-1;
    var color = "rgb("+red+", "+green+", "+blue+")"
    document.getElementById('buttonRoll').style.backgroundColor = color;
}


// Code d'el Roliste Changement de la couleur des résultats
var mode = 1;
var rouge = 0;
var vert = 255;
var bleu = 0;
function ColorResult(){
    if (mode == 1) {
        vert -= 1;
        bleu += 1;
    }else if (mode == 2) {
        bleu -= 1;
        rouge +=1;
    } else {
        vert += 1;
        rouge -=1;
    }
    if (vert == 255 && bleu == 0 && rouge == 0) {
        mode = 1;
    }else if (vert ==0 && bleu == 255 && rouge == 0) {
        mode = 2;
    } else if (vert ==0 && bleu == 0 && rouge == 255){
        mode = 3;
    }
    var couleur = "rgb("+rouge+", "+vert+", "+bleu+")"
    changeRoll.style.color = couleur;
}
setInterval(ColorResult, 1)
// getElementById('demo').innerHTML= page;
