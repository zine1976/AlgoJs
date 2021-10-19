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

  attaque(x) {
    return x + this.weight + 15;
  }

}


// Appel de class D'exemple !
let myperso = new Perso("Sorken", 50, 1950, "diamond", "MagicPsy", 100, false);
document.getElementById("persoSorken").innerHTML =
  "Mon Perso a " + myperso.anneeFormat() + " Et il s'appel " + myperso.name;
document.getElementById("sorkenName").innerHTML = myperso.name;
// console.log("Mon Perso a " + myperso.anneeFormat() + " Et il s'appel " + myperso.name + "et il lance une attaque avec son épée de " + myperso.attaque(48));
document.getElementById("interactSorken").innerHTML = "<br><strong> " + myperso.name + "</strong> attaque avec son épée de " + myperso.attaque(48);


//Le perso de Cristian 
class Personnage {
  constructor(name, category, monture, items, pv) {
    this.name = name;
    this.category = category;
    this.monture = monture;
    this.items = items;
    this.pv = pv;
  }


  attaque(atk) {
    if (this.items == "DivineRapier") {
      return atk + 31;
    }
    else if (this.items == "Aghanim") {
      return atk + 20;
    }
    else  {
      return atk + 7;
    }
  }
  defense(def) {
    if (this.items == "Tarasque") {
      return def + 98;
    }
    else if (this.items != "Tarasque") {
      return def - 15;
    }
  }
  mana(mp) {
    if (this.items == "Bloodstone") {
      return mp + 25;
    }
    else if (this.items != "Bloodstone") {
      return mp + 2;
    }
  }
}

var tableauItems=["DivineRapier", "Aghanim","Tarasque","Bloodstone"];
var indiceRandom =Math.floor(Math.random() * (tableauItems.length - 0)) + 0
document.write(indiceRandom)

let monperso = new Personnage("Luna", "Rider", "Nova", tableauItems[indiceRandom], 150);

document.getElementById("persoLuna").innerHTML = "Mon Perso est " + monperso.name + " c'est un " + monperso.category + " sa monture s'appelle " + monperso.monture +" son equipement est  : " + monperso.items;
document.getElementById("lunaname").innerHTML = monperso.name;

if(monperso.items == "Tarasque")
{
  document.getElementById("luna-interact").innerHTML = " Grace a son item  Tarasque <br><strong> " + monperso.name + "</strong> recoit + 98 defense, sa defense passe a " + monperso.defense(50) +" elle survit a l'attaque ";
}
else {
  document.getElementById("luna-interact").innerHTML = "Ne pouvant pas se defendre Luna lance une derniere attaque de " + monperso.attaque(98);
}

// FIN PERSO CRISTIAN

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
