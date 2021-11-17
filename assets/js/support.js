

console.log("supportjs"); // console de démarrage (nous indique que le fichier js est bien connecté)
var divimg = document.createElement("div"); // creation d'un element html div
divimg.setAttribute("class", "classimg"); // ajout d'un attribut de class
divimg.setAttribute("id", "divimg"); // ajout d'un id
document.body.appendChild(divimg); // affichage dans le html

var btnNext = document.createElement("BUTTON");
btnNext.setAttribute("id", "btnNext");
btnNext.setAttribute("onClick", "skillSuivant();");
btnNext.innerHTML = "suivant";
document.body.appendChild(btnNext);

var btnPrec = document.createElement("BUTTON");
btnPrec.setAttribute("id", "btnPrec");
btnPrec.setAttribute("onClick", "skillPrécedent();");
btnPrec.innerHTML = "precedent";
document.body.appendChild(btnPrec);

function skillSuivant(){ // déclaration de fonction
  var div = document.getElementById("divimg"); // ciblage div avec nouvelle class via id
  var attrib = div.getAttribute("class"); // recupération de l'attribut class
  // console.log("la class est : " + attrib); // log de la class active
  switch (attrib) {
    case "classimg":
    console.log("classimg-defaut");
    div.setAttribute("class", "classnewimg"); // reattribution class
      break;
    case "classnewimg":
    console.log("classnewimg");
    div.setAttribute("class", "newimage"); // reattribution class
      break;
    case "newimage":
    console.log("newimage");
    div.setAttribute("class", "classimg"); // reattribution class
      break;
    default:
    div.setAttribute("class", "classimg");
  }
}

function skillPrécedent(){ // déclaration de fonction
  var div = document.getElementById("divimg"); // ciblage div avec nouvelle class via id
  var attrib = div.getAttribute("class"); // recupération de l'attribut class
  // console.log("la class est : " + attrib); // log de la class active
  switch (attrib) {
    case "newimage":
    console.log("newimage");
    div.setAttribute("class", "classnewimg"); // reattribution class
    break;
    case "classnewimg":
    console.log("classnewimg");
    div.setAttribute("class", "classimg"); // reattribution class
      break;
    case "classimg":
    console.log("classimg-defaut");
    div.setAttribute("class", "newimage"); // reattribution class
    break;
    default:
    div.setAttribute("class", "classimg");
  }
}

// if(attrib != "classimg" && attrib != "classnewimg" && attrib != "newimg"){ // condition sur la class apres récuperation
//   index = 1;
//   alert("l'index est: " + index);
//
// } else if(attrib = "classnewimg" && attrib != "newimg" && attrib !="classimg"){
//   index = 2;
//   console.log("la class classnewimg: " + attrib);
//   alert("l'index est: " + index);
//   newimage();
//
// } else if(attrib = "newimg"){
//   index = 3;
//   console.log("la class newimg: " + attrib);
//   alert("l'index est: " + index);
//
// } else {
//   index = 4;
//   console.log("la class : " + attrib);
//   alert("l'index est: " + index);
//   alert("this is nothing");
// }




function newimage(){
  var divnewimg = document.getElementById("divimg");
  divnewimg.setAttribute("class", "newimage");
}



function newimaged(){
  divimg.setAttribute("class", "newimage");
}



// const maConst = "une certaine constante";
// console.log("les logs");

//variables

// var sandale = document.getElementById("section");
// sandale.style.border = '1px solid blue';

// permet de créer un élément html
// var newItem = document.createElement("article");
// sandale.appendChild(newItem);
// newItem.style.height = '200px';
// newItem.style.border = '1px solid green';

// var newP = document.createElement("paragraphe");
// newItem.appendChild(newP);
// newP.innerHTML = "toto";









// var idparent = document.getElementById("parent");
// var paragrapheEnfant = document.createElement("paragraphe");
// idparent.appendChild(paragrapheEnfant);
// paragrapheEnfant.innerHTML = "paragrapheEnfantdeSaSoeur";
//fonction




// let button = document.getElementById("buttonSlide");
// button.onclick = function() {slider()};
// button.addEventListener("click", slide());





/*conception TP*/


// button

// emplacement HTML

// css / js


// - js
//
// créer une element affichant une image
//
// - css
//
// class image1 display block
//
// class imageX display: none;
//
//
//
// quand on clique sur le button alors on change de class
