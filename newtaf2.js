class Person {
  constructor(nom, age = 0 ){
    // on recupere les informations de la personne en interne
    this.nom = nom;
    this.age = age;
    this.isMajeur = (this.age >= 18)
  
  salutation()
    // /* on ecrit un message de bienvenue
    // personalisé selon qu'il est majeur ou non */
    if(this.isMajeur){
      console.log("bonjour " + this.nom + ",tu as " + this.age );}
      else{
                  console.log ('bonjour ${this.nom}, tu as ${this.age} ');}
                  
  
}
const person2 = new person("jean", 22);
person2.salutation(); // Affichera dans la console 'bonjour jean, tu as 22 ans donc tu 
es majeur.'
const person3 = new person("luc", 16);
person3.salutation(); // Affichera dans la console 'bonjour luc, tu as 16 ans donc tu 
es mineur.'
