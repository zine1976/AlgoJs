
  alert ('bonjour tout le monde');
  


const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");

console.log (cars);

var pi = 3.14; //decimal
var person = "lionel";
var answer = "quarante-deux";

console.log("en voyant "+ pi +"," + person + " eu la reponse a la vie " +  answer);



let x = 16 + " Volvo";

console.log(x)

    let a = 5;
    let b = 4;
    let z = a+b;
    console.log(z);

    let c = 3;
    let d = 6;
    let e = c-d;
    console.log(e);

    let f = 2;
    let g = 4;
    let h = 4*5;
    console.log(f*g);


// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };

//   console.log(person.firstName + person.lastName + "a" + person.age + "an");

var price1 = 5;
var price2 = 6;
var total = price1 + price2;
console.log(total)

function myFunction(p1, p2) {
    return p1 * p2;
  }

  myFunction (5, 3);
  console.log(myFunction(5,3));


  var t = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}
console.log(t)

function toCelsius(f) {
    return (5/9) * (f-32);
  }
   toCelsius(77);
   console.log(toCelsius(77));

  const l = 5;
  const m = l * 4;
  const w = m + 3;
  const r = m * l - w;
  var q = (l+m+w*r); 
  
  console.log (q)

  

  
  
  function annee(a) {
    let result;
    if (a < 2003) {
      result = 'pas de bourse';
    } else {
      result = ' boursier';
    }
    return result;
  }
  
  console.log(annee(2008));
  // expected output: " boursier"


  function annee(a) {
    let result;
    if (a < 2003) {
      result = 'pas de bourse';
    } else if (a > 2009) {result = "pas de bourse";}
    
    else {
      result = ' boursier';
    }
    return result;
  }
  
  console.log(annee(2008));
  // expected output: " boursier"

  const birthday = new Date('october 03, 1976 07:15:30');
const date1 = birthday.getDate();

console.log(date1);
// expected output: 03

const moonLanding = new Date('october 03, 76 00:20:18');

console.log(moonLanding.getFullYear());
// expected output: 1976

const j = new Date();
console .log(j)





