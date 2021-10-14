
// Code de Cristian
var x = 15;
var z = " Salut";
var y = " DWWM19 "
z += y;
x += 15;
x *= 3;
x -= 2;
x /= 2; 
x += z;

// les tableaux
let tab=[];
let tab2=[];
let tab3=[];
// facon 1 de definir 
tab[0]="mazda";
tab[1]="ford";
// facon 2 de definir
tab2=["voiture1", "voiture2"];

// boucles for

var nombre=0;

for ( let i = 0; i < 5 ; i++){
    tab3[i] = nombre + i;
    

}

console.log(x,tab,tab2,tab3);

document.getElementById('demo').innerHTML= x;
document.write(tab," ",tab2,"<br>",tab3);




