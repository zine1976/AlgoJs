var log = "Voici le résultat :"

var x = 15
var y = -25

x = y

console.log(log, x);

// modif 2

var z = " string "
x = x + z

console.log("modif2" + log + x)

var fkg =document.getElementById('demo');
console.log(fkg)
fkg.innerHTML = log + z + x


// variable clicked

var clicked = document.getElementById('clicked').onclick =
function(e){
    console.log("clicked :" +clicked)
    alert("mdr bien vu Neo")
}