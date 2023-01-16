let btnSubmitForm = document.getElementById('btnSubmit');
let form = document.forms.form1;

const regexEmail = new RegExp('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;');

const regexPassword = new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/');

const spanErrorEmail = document.getElementById('regexEmailerror');
const spanErrorPassword = document.getElementById('regexPassworderror');

let emailValue = form.email.value;
let passwordValue = form.password.value;

const testPassword = function testPassword() {
    if (regexPassword.test(passwordValue) == true) {
        spanErrorPassword.innerHTML = '';
        return true;
    } else {
        spanErrorPassword.innerHTML = 'mot de passe invalide';
        return false;
    }
}

const testEmail = function testEmail() {
    if (regexEmail.test(emailValue) == true) {
        spanErrorEmail.innerHTML = '';
        return true;
    } else {
        spanErrorEmail.innerHTML = 'Ce n\'est pas un email valide';
        return false;
    }
}

btnSubmitForm.addEventListener("click", function () {

    console.log(regexPassword.test(passwordValue));

    if (testPassword() && testEmail()) {
        alert('Vous avez réussi !');
    }

});


