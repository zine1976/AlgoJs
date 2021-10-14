var start = "HelloWorld In Js From Script";
var page='<html><body><p id="demo"></p></body></html>';
console.log(start,page);

// getElementById('demo').innerHTML= page;



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