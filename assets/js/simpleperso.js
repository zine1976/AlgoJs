/* Partie Julien */
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

let myperso = new Perso("Sorken", 50, 1950, "diamond", "MagicPsy", 100, false);

document.getElementById("name_julien").innerHTML = myperso.name;
document.getElementById("description_julien").innerHTML = "<br><strong> "+myperso.name + "</strong> attaque avec son épée de " + myperso.attaque(48) +
"<br><br><strong>" + myperso.name + "</strong> a " + myperso.anneeFormat() + " année terrestre";

/* Partie J-M */
class Avatar{
  constructor(name, weapon = "kamehameha", pv = 1000){
    this.name_jm = name;
    this.weapon = weapon;
    this.pv = pv;
    this.presentation = function(){
      var elem = document.getElementById("description_jm");
      if (elem)
        elem.innerHTML = "<b>Goku</b> est ultra <span style=\"color:green\">vif</span> et fume <span style=\"color:green\">tout l'monde</span> j'veux rien savoir";
    }
  }
  attaqueDefault(target){
    if (target.hasOwnProperty('pv'))
      target.pv -= 20;
  }
  attaqueCombine(target){
    if (target.hasOwnProperty('pv'))
      target.pv -= 35;
  }
  /*  - change la propriété quand elle existe du
          perso ciblé
      - change également ma propriété sur <p id="name_jm"> car je l'ai appelé de
          la même façon que ma variable, voir plus haut
  */
  changePropertie(target, propertie, value){
    if (target.hasOwnProperty(propertie)){
      target[propertie] = value;
      
      var elem = document.getElementById(propertie);
      if (elem)
        elem.innerHTML = value;
    }
  }
  destroy(target){
    if (target.hasOwnProperty('pv'))
      target.pv = 0;
  }
}

var avatar = new Avatar("Goku");
avatar.presentation();
avatar.changePropertie(avatar, "name_jm", "Goku");
avatar.destroy(myperso);

/* */


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
