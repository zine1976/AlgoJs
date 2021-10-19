class Perso {
  constructor(name, weight, annee, equipement, shard, pv, talisman) {
      this.name = name;
      this.weight = weight;
      this.annee = annee;
      this.equipement = equipement;
      this.shard = shard;
      this.pv = pv;
      this.talisman = talisman;
  }

anneeFormat() {
  let date = new Date();
  return date.getFullYear() - this.annee;
}

attaque(x){
  return x + this.weight + 15;
}

}


// Appel de class D'exemple !
let myperso = new Perso("Sorken", 50, 1950, "diamond", "MagicPsy", 100, false);

console.log("Mon Perso a " + myperso.anneeFormat() + " Et il s'appel " + myperso.name + "et il lance une attaque avec son épée de " + myperso.attaque(48));






// const perso = {
//   name : "Sorken",
//   weight : 50,
//   année : 1435,
//   equipement :["diamond", "argent", "fer"],
//   shard : "MagicPsy",
//   pv :  100,
//   tasliman : false
//
// };
//
//
// let diamond = "diamond";
// let argent = "argent";
// let fer = "fer";
//
// if (perso.equipement == "diamond"){
//   weight = perso.weight + 15;
// } else if (perso.equipement == "argent"){
//   weight = perso.weight + 10;
// } else if(perso.equipement == "fer" ){
//   weight = perso.weight + 5;
// } else {
//   weight = perso.weight;
// }
//
//
//
// equipement = perso.equipement = "argent";
//
// // accesseurs
//
// alert("Mon joueur s'appel "+perso.name + ", il pese " + weight + ",il est né en l'an " + perso.année+"et possede une "+perso.equipement+"Ainsi qu'un atout de type"+perso.shard+"il un nombre de pv égale a "+perso.pv);

// classe Perso PrBe
class bonhomme{
  constructor(Nom, vie, armure, attaque, vitesse, vivant){
      this.Nom = Nom
      this.vie = vie;
      this.armure = armure;
      this.attaque = attaque;
      this.vitesse = vitesse;
      this.vivant = vivant;
  }
  
}

var mybonhomme = new bonhomme("Bonhomme", 100, 5, 10, 15, true);
var Textbonhomme =(`Ce perso s'appelle ${mybonhomme.Nom} Voici ses stats : ${mybonhomme.vie}Pv${mybonhomme.armure} d'armure ${mybonhomme.attaque} de dégâts.`)
document.getElementById(Presentation).innerHTML = Textbonhomme;