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



