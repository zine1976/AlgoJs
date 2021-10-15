
var g1 = "groupe1"
var g2 = "groupe2"
var g3 = "groupe3"



const string = ["rouge","vert","bleu"]
const integer = [21,42,84]
const bool = [true, false, null]
const variable = [g1,g2,g3]


document.getElementById("string").innerHTML = string;
document.getElementById("integer").innerHTML = integer;
document.getElementById("bool").innerHTML = bool;
document.getElementById("variable").innerHTML = variable;


document.getElementById("char").innerHTML = string;
document.getElementById("nombre").innerHTML = integer;
document.getElementById("vraixfaux").innerHTML = bool;
document.getElementById("celleci").innerHTML = variable;



var g1 = "groupe1"
var g2 = "groupe2"
var g3 = "groupe3"



const string = ["rouge","vert","bleu"]
const integer = [21,42,84]
const bool = [true, false, null]
const variable = [g1,g2,g3]



// Code d'el Roliste
var textRoll = `Il était une lapine, qui un matin, c'est levée en voulant une carrote. "Oh, je voudrais tant manger votre carotte Monsieur!" dit-elle à un passant. Alors, le passant sorti sa carrote en lui précisant bien "Savoure petite, je te donne volontier ma grosse carotte". Ainsi, c'est avec le ventre bien plein que la jeune lapine commença la journée.`
var tableauRoll = textRoll.split(' ');
console.log(tableauRoll.join(' '));