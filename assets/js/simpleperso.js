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
>>>>>>> edf5af22f4653e542a61591f409f297b26488fc8

var avatar = new Avatar("Goku");
avatar.presentation();
avatar.changePropertie(avatar, "name_jm", "Goku");
avatar.destroy(myperso);

// Code personnage Michel

class random {
  constructor(name, age, equipement, passive, pv) {
            this.name = name;
            this.age = age;
            this.equipement = equipement;
            this.passive = passive;
            this.pv = pv;

            
    }
  }

let randomhero = new random("Worgen", 20, "Cloves", "Force surnaturelle", "150");
document.getElementById("Wolf").innerHTML=
"Mon personnage a " + randomhero.age + " Il s'appelle " + randomhero.name + " Et il possède " + randomhero.passive;






// class Akin
class Azerty {
  constructor(name, genre, pv, equipement) {
      this.name = name;
      this.genre = genre;
      this.pv = pv;
      this.equipement = equipement;
  }
}
let myazerty = new Azerty("Azerty", "gorille", 200, "M4");
document.getElementById("persoAzerty").innerHTML= "Mon perso est un " + myazerty.genre + ", on le nomme " + myazerty.name;
document.getElementById("azertyName").innerHTML = myazerty.name;
document.getElementById("interactAzerty").innerHTML = "<br><strong> "+myazerty.name + "</strong> est un " + myazerty.genre + " bien costaud avec " + myazerty.pv + "PV qui vient s'échapper du Zoo et se procure une " + myazerty.equipement + ". Il se tient devant " + myperso.name +" pret à attaquer";



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

// classe Perso PrBe
class Bonhomme{
  constructor(nom, vie, armure, attaque, vitesse, vivant){
      this.Nom = nom
      this.vie = vie;
      this.armure = armure;
      this.attaque = attaque;
      this.vitesse = vitesse;
      this.vivant = vivant;
  }

}

var mybonhomme = new Bonhomme("Bonhomme", 100, 5, 10, 15, true);
var textbonhomme ="Ce perso s'appelle "+ mybonhomme.Nom + " Voici ses stats : " + mybonhomme.vie + "Pv " + mybonhomme.armure + " d'armure " + mybonhomme.attaque + " de dégâts.";
document.getElementById('presentation').innerHTML = textbonhomme;

