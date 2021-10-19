// import { Perso, inputed, getInputValue } from './perso.js';
// let newHero = new Perso("YollowMan", "50", 1943, "DiamondSword", "MagicPsy")
// console.log(newHero);
var inputed = document.createElement("INPUT");
  inputed.setAttribute("type", "text");
  inputed.setAttribute("value", "Hello World!");
  document.body.appendChild(inputed);

function getInputValue() {
        // Selecting the input element and get its value
        let inputVal = inputed.value;
        // Displaying the value
        alert(inputVal);
      }
