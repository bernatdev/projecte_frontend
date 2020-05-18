// Selecció elements de text
var nom = document.getElementById("nom");
var mobil = document.getElementById("mobil");
var email = document.getElementById("email");
var correu = document.getElementById("correu");

// Configuració event listener
form_contacte.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);

// funció de validació
function ValidarContacte() {

    var acumErrors = 0;
    form_contacte.classList.remove('is-invalid');

    // validar nom
    if (nom.value == "") {
        nom.classList.add("is-invalid");
        document.getElementById("error_nom").textContent = "El nom és obligatori";
        acumErrors++;
    }

    // validar correu
    if (correu.value == "") {
        correu.classList.add("is-invalid");
        document.getElementById("error_correu").textContent = "El correu és obligatori";
        acumErrors++;
    } else if (!validar_correu(correu.value)) {
        correu.classList.add("is-invalid");
        document.getElementById("error_correu").textContent = "El correu ha de tenir el format mail@domini.cat";
        acumErrors++;
    }

    // validar telefon
    if (mobil.value == "") {
        mobil.classList.add("is-invalid");
        document.getElementById("error_mobil").textContent = "El mòbil és obligatori";
        acumErrors++;
    } else if (!validar_mobil(mobil)) {
        mobil.classList.add("is-invalid");
        document.getElementById("error_mobil").innerText = "El mòbil ha de contenir com a mínim 9 xifres.\nHa de contenir 9 xifres, i pot afegir el prefixe 34";
        acumErrors++;
    }

    if (acumErrors > 0) {
        return false;
    } else {
        return true;
    }
}


// funcions event
function validar_correu(correu) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  // format xxx@xxx.xxx
    return regex.test(correu) ? true : false;
}

function validar_mobil(mobil) {
    var regex = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;  // que comenci per 6, 7, 8 o 9; o prefixe +0034 i 8 xifres més
    return regex.test(mobil) ? true : false;
}