
class Perso {
    constructor(firstName, lastName, category, poids, rank, pv) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.category = category;
        this.poids = poids;
        this.rank = rank;
        this.pv = pv;
    }
    attaque(){
        return 100;
    }
    defense(){
        return 98;
    }
    mana(){
        return 1000;
    }
}

let myperso = new Perso("Luna", "Selemene", "Blaider", 50, "General", 300)
console.log(myperso);
myperso.category="Raider";
console.log(myperso);

// const personnage = {
//     firstName: "Luna",
//     lastName: "Selemene",
//     category: ["Blader" , "Rider"],
//     poids:50,
//     rank:"General",

//     pv: function(x){
//         return 10*x;
//       }

//   };

// poids = personnage.poids;
// poids=75;





//   alert("Mon joueur s'appelle "+ personnage.firstName + " "+ personnage.lastName + " Il pese "+ personnage.poids+ "kg C'est un " + personnage.rank + " de l'armee du dieu Mene. C'est un " +personnage.category[0] +" ainsi qu'un "+personnage.category[1]   );