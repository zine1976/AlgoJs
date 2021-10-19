
console.log("event.js")

var clicked = document.getElementById("clicked").onclick =
function(e){
    console.log("clickedd: " + clicked);
    alert("Have you clicked");     
}

var clickedd = document.getElementById("clickedd").onclick =
function(e){
    console.log("clickedd: " + clickedd);
    alert("T'as perdu, faut donner 50€ via paypal à michelvilbert9@gmail.com");     
}






var chris = document.getElementById("chris")

chris.onclick = function (e) {
    
    if(chris.style.backgroundColor=="green"){
        chris.style.background="blue";
       
    }
    else{
        chris.style.background="green";
    }
    
    console.log("clicked: "+ chris);
}

