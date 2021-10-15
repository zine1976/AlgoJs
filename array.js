// tableaux cristian
var g1 = "groupe1"
var g2 = "groupe2"
var g3 = "groupe3"



const string = ["rouge","vert","bleu"]
const integer = [21,42,84]
const bool = [true, false, null]
const variable = [g1,g2,g3]
const histoire = ["Bonjour", "le ","groupe", "DWWM19"];


document.getElementById("tab1").innerHTML = string;
document.getElementById("tab2").innerHTML = integer;
document.getElementById("tab3").innerHTML = bool;
document.getElementById("tab4").innerHTML = variable;

for(let variable in histoire ){
    document.write(variable);
}