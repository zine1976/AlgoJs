
console.log("event.js");
var clicked = document.getElementById("clicked").onclick =
function(e) {
    console.log("clicked:"+clicked);
    alert("you have clicked");
};
