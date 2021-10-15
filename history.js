// consigne ecrire un algoritme qui en bouclant sur un tableau de mot raconte une histoire 
// exemple: 
//  tableau = "mots", "mots", "mots"
//  pour chaque "mots" du "tableau":
//        ecrire le mot     


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

// boucle PrBe

const histoire = ["La", "princesse", "dans", "son", "chateau"];
let mots = "";
let n = 0;
for (;n < histoire.length; n++){
  mots += histoire[n] + " ";
}

document.getElementById("histoire").innerHTML = mots;