
console.log("event.js")

var clicked = document.getElementById("clickedd").onclick =
function(e){
    console.log("clickedd: " + clicked);
    alert("T'as perdu, faut donner 50€ via paypal à michelvilbert9@gmail.com");     
}






var clicked = document.getElementById("clicked")

clicked.onclick = function (e) {
    
    if(clicked.style.backgroundColor=="green"){
        clicked.style.background="blue";
       
    }
    else{
        clicked.style.background="green";
    }
    
    console.log("clicked: "+clicked);


}


