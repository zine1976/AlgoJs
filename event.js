
// Code de Cristian

console.log("event.js");
var clicked = document.getElementById("clicked");

clicked.onclick = function (e) {
    
    if(clicked.style.background[0]=="g"){
        clicked.style.background="blue";
       
    }
    else{
        clicked.style.background="green";
    }
    
    console.log("clicked: "+clicked);

}
