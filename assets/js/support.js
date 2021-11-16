
const maConst = "une certaine constante";


console.log("les logs");

//variables

var sandale = document.getElementById("section");
sandale.style.border = '1px solid blue';

// permet de créer un élément html
var newItem = document.createElement("article");
sandale.appendChild(newItem);
newItem.style.height = '200px';
newItem.style.border = '1px solid green';

var newP = document.createElement("paragraphe");
newItem.appendChild(newP);
newP.innerHTML = "toto";


// var idparent = document.getElementById("parent");
// var paragrapheEnfant = document.createElement("paragraphe");
// idparent.appendChild(paragrapheEnfant);
// paragrapheEnfant.innerHTML = "paragrapheEnfantdeSaSoeur";
//fonction
function slide(){
  alert("un truc");
  var img1 = document.getElementsByClassName("slideImage1");
  var img2 = document.getElementsByClassName("slideImage2");
  var img3 = document.getElementsByClassName("slideImage3");
  var img3 = document.getElementsByClassName("slideImage4");
  if (img1.style.display = "block"){
    img1.style.display = "none";

  } else if (img2.style.display = "none"){
    img2.style.display = "block";
  }

}




let button = document.getElementById("buttonSlide");
button.onclick = function() {slide()};
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
