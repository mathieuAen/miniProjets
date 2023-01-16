// Exercice 9 : 
function checkPalindrome(str) {
    let div = document.createElement("div");
    let strLower = str.toLowerCase();
    let strClean = strLower.replace(/[^a-z0-9]/g, "");
    let reversedStr = strClean.split("").reverse().join("");
    div.innerHTML = strClean === reversedStr;
    return div;
}

const pal = checkPalindrome("À l'autel elle alla, elle le tua là");

const container = document.getElementById("pal-container");
document.body.appendChild(pal);