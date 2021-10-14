console.log("event.js")
var clicked = document.getElementById("clicked");

clicked.onclick = function (e) {
    console.log("clicked: " + clicked)
    clicked.style.background="green";

}
