// consigne ecrire un algoritme qui en bouclant sur un tableau de mot raconte une histoire
// exemple:
//  tableau = "mots", "mots", "mots"
//  pour chaque "mots" du "tableau":
//        ecrire le mot


// Declaration variables

// object

let x = 100

const perso = {
  name = "Sorken"; // proprietés
  weight = 50;
  année = 1435;
  equipement = "DiamondSword";
  shard = "MagicPsy";
  pv =  x;
  tasliman = false;

 }



// accesseurs
alert(perso.name, perso.weight, perso.année, perso.equipement, perso.shard, perso.pv);







// Code d'el Roliste
var textRoll = `Il était une lapine, qui un matin, c'est levée en voulant une carrote. "Oh, je voudrais tant manger votre carotte Monsieur!" dit-elle à un passant. Alors, le passant sorti sa carrote en lui précisant bien "Savoure petite, je te donne volontier ma grosse carotte". Ainsi, c'est avec le ventre bien plein que la jeune lapine commença la journée.`
var tableauRoll = textRoll.split(' ');
console.log(tableauRoll.join(' '));

// Boucle Cristian for


const blague = ["C'est", " l'histoire  ","du", "ptit dej",", tu","la","connais", "?"];
const reponse =["Pas", "de","bol."];
let question = "";
let repo = "";
var indice = 0;

// Boucle Cristian for

for (let i = 0; i < blague.length; i++) {
    question +=blague[i]+" ";
  }
  document.getElementById("blague").innerHTML = question;

  for (let j = 0; j < reponse.length; j++) {
    repo +=reponse[j]+" ";
  }
  document.getElementById("answer").innerHTML = repo;


// Boucle For element of Cristian




// Boucle Akin
const stor = ["Il", " était", " une fois", " un", "chat", " coincé"," dans"," un"," arbre","..."];
let texto = "";

for (let i = 0; i < stor.length; i++) {
  texto += stor[i] + " ";
}
document.getElementById("stor").innerHTML = texto;

// Boucle For element in Cristian


for (elem of blague){
    document.write(elem+" ");
}
document.write("<br>");

for (rep of reponse){
    document.write(rep+" ");
}


document.write("<br>");


// Boucle for avec conditions - Cristian
for (let i in blague){
    if (i%2 == 0){
        document.write("cet element a un indice pair "+"<b>"+blague[i]+"</b>"+"<br>")
    }
    else{
        document.write("cet element a un indice impair "+"<b>"+blague[i]+"</b>"+"<br>")

    }
}
// Boucle while
while ( indice < reponse.length ) {
    document.write("<b>"+reponse[indice]+"</b>"+"<br>")
    indice++;
    if(reponse[indice] == "bol.")
    {
        reponse.push("HAHAHA , tres bonne blague")
    }
}



// Michel test

const conte = ["Il", "était", "une", "fois"];
let story = "";

for (let i = 0; i < conte.length; i++) {
  story +=conte[i]+" ";
}
document.getElementById("conte").innerHTML = story;


// boucle PrBe

const histoire = ["La", "princesse", "dans", "son", "chateau"];
let mots = "";
let n = 0;
for (;n < histoire.length; n++){
  mots += histoire[n] + " ";
}

document.getElementById("histoire").innerHTML = mots;

// appel du fichier json via jquery /_!_\ ne pas toucher et ne pas tenir compte pour le moment /_!_\
function loadJSON() {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            this.responseText;
          }
    };
    xobj.open('GET', 'history.json'); // Replace 'appDataServices' with the path to your file
    xobj.send();
 }


let dataloaded = loadJSON();
let parseddata = JSON.parse(dataloaded);
console.log(parsedata);
