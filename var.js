
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




var clicked = document.getElementById("clicked").onclick =
function(e){
    console.log("clicked: " + clicked)
    alert("you have clicked ?")
}