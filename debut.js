
const b =  Date (2003, 11, 26);


var c = "en allant au resto le ";
var d = "j'ai vu une lamborghini ";
var f =  Date(2004, 10, 26);
if  (f<b) { console.log ("autorise");

} else   console.log (" pas autorise");

console.log(c + " " + b + " " + d);

var modelLamborghini = {
    model : 'gallardo',
    color : 'red',
    speedmax : 330,
    option : 'full',
    year : '2010'
};
console.log(modelLamborghini);

function assurance(a){
    let result;
    if (a>2009){
        result ="assurance";
    }else{
        result ="pas d'assurance loser"
    }
    return result
}console.log(assurance(2008))


const myName = `mahdi`;
const salutation = `bienvenue sur mon site web ${myName}!`
console.log(salutation);

let firstname = "mahdi";
let lastName = "zine el abidine";
let wholeName = firstname + " " + lastName;
console.log(wholeName);

let compteur = 0;
for (compteur; compteur < 10;compteur ++){
    console.log(compteur);
}


compteur ++
console.log(compteur);

let weirdCalculation = (0.34 + 0.87)*1011.13;
console.log(weirdCalculation);





