// Code de Cristian

console.log("var.js");


// Code d'el Roliste
var dice = [0,0];
const changeRoll = document.getElementById('ResultDice');

function Dice(){
    for (let test = 0; test < dice.length; test++) {
        dice[test] = Math.ceil(Math.random()*6);
    }
    var result = "Result of dice: "+dice.join(', ');
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



// 1

// var log = "test"
var x = 9
y = 50
x = x + y
console.log( "1" + log + x )

// 2

var z = "test"
x = x + y + z
console.log ("2" + log + x )

// 3

x = y - z
console.log ("3" + log + x )

// 4 

x = y
console.log ("4" + log + x )

// 5

x = 5
console.log ("5" + log + x )



var az = document.getElementById('demo');

console.log(az)

az.innerHTML = z

function fun() {  
    alert("Bienvenue sur le site!");  
    }  



console.log("var.js")

var x = 15;
var z = " Salut";
var y = " DWWM19 "
z += y;
x += 15;
x *= 3;
x -= 2;
x /= 2; 
x += z;


/* Variables Emilie */

/* Variable em */
var em= 5;
console.log("variable em is:", em);

/* Variable is */
var is= em + 2;
console.log("variable is is:", is);

/* Variable aw */
var aw = is * 4;
console.log("variable aw is:", aw);

/* Variable some */
var some = aw / 4;
console.log("variable some is:", some);

/* Variable ness */
var ness = some - 2;
console.log("variable ness is:", ness);


var log = "Voici le résultat :"

var x = 15
var y = -25

x = y

console.log(log, x);

// modif 2

var z = " string "
x = x + z

console.log("modif2" + log + x);

var fkg = document.getElementById('fkg');
console.log(fkg);
fkg.innerHTML = log + z + x;


// variable clicked

var clickeddd = document.getElementById('clickeddd').onclick =
function(e){
    console.log("clickeddd :" + clickeddd);
    alert("mdr bien vu Neo");
}









// EXO AKIN // 

var a = 10
b = 5
a = a + b
console.log(" A : " + a + " est un nombre impair");
document.getElementById("a1").innerHTML = " A : " + a + " est un nombre impair";


var c = 2
c = a + c
console.log(" B : " + c + " est un nombre impair");
document.getElementById("b1").innerHTML = " B : " + c + " est un nombre impair";

const d = "pair"
c = a - c + 20
console.log(" C : " + c + " est un nombre " + d);
document.getElementById("c1").innerHTML = " C : " + c + " est un nombre " + d;


const e = "impair" 
c = a - c + 10 
console.log(" D : " + c + " est un nombre " + e);
document.getElementById("d1").innerHTML = " D : " + c + " est un nombre " + e;


a = a  + c 
console.log(" E : " + a + " est un nombre " + d);
document.getElementById("e1").innerHTML = " E : " + a + " est un nombre " + d;

// variables :
// code du formateur

var x = 42
var page= " en js" 
var result = x + page
console.log(result);
document.getElementById('demo').innerHTML= result;


// exo transformer une var 5 x


// modif 1
var log = "Notre var a pour valeur: "
var x = 15
y = 42
x = x + y 
console.log( "modif1: " + log + x  );

// modif 2
var z = "string"
x = x + z + y 
console.log( "modif2: " + log + x  );

// modif 3
x = 87
console.log( "modif3: " + log + x  );

// modif 4
x = x

//modif 5 
const etagere = [x,y,z]
console.log("The last modif " + etagere)



console.log(x);

document.getElementById('demo').innerHTML= x;







