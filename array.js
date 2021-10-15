
var g1 = "groupe1"
var g2 = "groupe2"
var g3 = "groupe3"



const string = ["rouge","vert","bleu"]
const integer = [21,42,84]
const bool = [true, false, null]
const variable = [g1,g2,g3]


// tableaux cristian

document.getElementById("tab1").innerHTML = string;
document.getElementById("tab2").innerHTML = integer;
document.getElementById("tab3").innerHTML = bool;
document.getElementById("tab4").innerHTML = variable;


// algo d'affichage d'emillie

document.getElementById("string").innerHTML = string;
document.getElementById("integer").innerHTML = integer;
document.getElementById("bool").innerHTML = bool;
document.getElementById("variable").innerHTML = variable;

// algo d'affichage du formateur
document.getElementById("char").innerHTML = string;
document.getElementById("nombre").innerHTML = integer;
document.getElementById("vraixfaux").innerHTML = bool;
document.getElementById("celleci").innerHTML = variable;


// Test tableau PrBe
document.getElementById("mots").innerHTML = string;
document.getElementById("chiffre").innerHTML = integer;
document.getElementById("ouiounon").innerHTML = bool;
document.getElementById("thisone").innerHTML = variable;


// Akin //
const nombres = ["10","20","30","40","50","60","70","80","90","100"]
const pronoms = ["Je ","Tu ","Il/Elle/On ","Nous ","Vous ","Ils/Elles"]
document.getElementById("nombres").innerHTML = nombres;
document.getElementById("pronoms").innerHTML = pronoms;

document.getElementById("ta1").innerHTML = string;
document.getElementById("ta2").innerHTML = integer;
document.getElementById("ta3").innerHTML = bool;
document.getElementById("ta4").innerHTML = variable;




// Code d'el Roliste
var textRoll = `Il était une lapine, qui un matin, c'est levée en voulant une carrote. "Oh, je voudrais tant manger votre carotte Monsieur!" dit-elle à un passant. Alors, le passant sorti sa carrote en lui précisant bien "Savoure petite, je te donne volontier ma grosse carotte". Ainsi, c'est avec le ventre bien plein que la jeune lapine commença la journée.`
var tableauRoll = textRoll.split(' ');
console.log(tableauRoll.join(' '));



