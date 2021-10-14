
// Code de Cristian

console.log("event.js");
var clicked = document.getElementById("clicked");

clicked.onclick = function (e) {
    
    if(clicked.style.background[0]=="b"){
        clicked.style.background="green";
        console.log(clicked.style.background[0])
    }
    else if(clicked.style.background[0]=="g")
    {
        clicked.style.background="blue";
        console.log(clicked.style.background[0])
    }
    else{
        clicked.style.background="green";
    }
    
    console.log("clicked: "+clicked);

}

