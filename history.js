// consigne ecrire un algoritme qui en bouclant sur un tableau de mot raconte une histoire 
// exemple: 
//  tableau = "mots", "mots", "mots"
//  pour chaque "mots" du "tableau":
//        ecrire le mot     


// Boucle Cristian

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

