function createitem();
exports.createitem = function(){
    var banniere = document.createElement("header");
    document.body.appendChild(banniere);
    var title = document.createElement("h1");
    title.innerHTML = "menu";
    banniere.appendChild(title);
}