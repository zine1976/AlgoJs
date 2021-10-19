class Perso {
    constructor(name, weight, age, equipement, shard){
              Perso.name = name;
              Perso.weight = wieght;
              Perso.age = age;
              Perso.equipement = equipement;
              Perso.shard = shard;
    }

    age(x){
      return x = Perso.year;
    }
}

let date = new Date();
let year = date.getFullYear();


let myPerso = new Perso("Sorken", "50", 1430, "DiamondSword", "MagicPsy" );
document.getelementByid("history").innerHTML() = "Mon nouveau perso s'appel " + myPerso.name + "Il pese " + myPerso.weight +"Il a "+myPerso.age(year) + ", il est équipé de " + myPerso.equipement + ", et possede l'atout " + myPerso.shard


// Classe - Akin
class Azerty {
  constructor(name, genre, pv, equipement) {
      this.name = name;
      this.genre = genre;
      this.pv = pv;
      this.equipement = equipement;
  }
}
let myazerty = new Azerty("Azerty", "gorille", 200, 1000, "M4");
document.getElementById("persoAzerty").innerHTML= "Mon perso est un " + myazerty.genre + ", on le nomme " + myazerty.name;
document.getElementById("azertyName").innerHTML = myazerty.name;
document.getElementById("interactAzerty").innerHTML = "<br><strong> "+myazerty.name + "</strong> est un " + myazerty.genre + " bien costaud avec " + myazerty.pv + "PV qui vient s'échapper du Zoo et se procure une " + myazerty.equipement + ". Il se tient devant " + myperso.name +" pret à attaquer";

console.log(myazerty.name + " est un " + myazerty.genre + " bien costaud avec " + myazerty.pv + "PV qui vient s'échapper du Zoo et se procure une " + myazerty.equipement + ". Il se tient devant " + myperso.name +" pret à attaquer" );