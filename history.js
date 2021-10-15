// consigne ecrire un algoritme qui en bouclant sur un tableau de mot raconte une histoire 
// exemple: 
//  tableau = "mots", "mots", "mots"
//  pour chaque "mots" du "tableau":
//        ecrire le mot     




// Code d'el Roliste
var textRoll = `Il était une lapine, qui un matin, c'est levée en voulant une carrote. "Oh, je voudrais tant manger votre carotte Monsieur!" dit-elle à un passant. Alors, le passant sorti sa carrote en lui précisant bien "Savoure petite, je te donne volontier ma grosse carotte". Ainsi, c'est avec le ventre bien plein que la jeune lapine commença la journée.`
var tableauRoll = textRoll.split(' ');
console.log(tableauRoll.join(' '));

// Boucle Cristian for

const blague = ["C'est", " l'histoire  ","du", "ptit dej",", tu","la","connais", "?"];
const reponse =["Pas", "de","bol."];
let question = "";
let repo = "";

for (let i = 0; i < blague.length; i++) {
    question +=blague[i]+" ";
  }
  document.getElementById("blague").innerHTML = question;

  for (let j = 0; j < reponse.length; j++) {
    repo +=reponse[j]+" ";
  }
  document.getElementById("answer").innerHTML = repo;

// Boucle For element in Cristian

for (elem of blague){
    document.write(elem+" ");
}
document.write("<br>");

for (rep of reponse){
    document.write(rep+" ");
}


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