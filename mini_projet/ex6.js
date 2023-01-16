// Exercice 6 :
function checkPhoneNumber(phoneNumber) {
    let div = document.createElement("div");
    let pattern = /^(06|07|01)[0-9]{8}$/;
    div.innerHTML = pattern.test(phoneNumber);
    return div;
}

const check = checkPhoneNumber("0760514055");

const container = document.getElementById("check-container");
document.body.appendChild(check);