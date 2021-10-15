// consigne ecrire un algoritme qui en bouclant sur un tableau de mot raconte une histoire 
// exemple: 
//  tableau = "mots", "mots", "mots"
//  pour chaque "mots" du "tableau":
//        ecrire le mot     

// Declaration variables
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