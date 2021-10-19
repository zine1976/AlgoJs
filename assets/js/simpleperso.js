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


// Code Gregor
class Roll {
  constructor(name, age, power, sexe, weapon){
    this.name = name;
    this.age = age;
    this.power = power;
    this.sexe = sexe;
    this.weapon = weapon;
  }
}

var CharacterRoll = new Roll("Faily", 23, "Cryomancie", "homme", "Faux");
console.log(CharacterRoll);
var RollTextCharacter = "Salutations jeune paysan, je suis "+CharacterRoll.name+" un jeune mage de "+CharacterRoll.age+" ans usant de "+CharacterRoll.power+". Oseras-tu te mesurer à moi?"
document.getElementById('Faily').innerHTML += RollTextCharacter;
// Code Gregor





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
