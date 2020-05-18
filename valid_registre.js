// Selecció elements de text
var nom = document.getElementById("nom");
var cognom = document.getElementById("cognom");
var mobil = document.getElementById("mobil");
var email = document.getElementById("email");
var provincia = document.getElementById("provincia");
var correu = document.getElementById("correu");
var contrasenya = document.getElementById("contrasenya");
var contrasenya2 = document.getElementById("contrasenya2");

// Configuració event listener
form_registre.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);

// funció de validació
function ValidarRegistre() {

    var acumErrors = 0;
    form_registre.classList.remove('is-invalid');

    // validar nom
    if (nom.value == "") {
        nom.classList.add("is-invalid");
        document.getElementById("error_nom").textContent = "El nom és obligatori";
        acumErrors++;
    }

    // validar cognom
    if (cognom.value == "") {
        cognom.classList.add("is-invalid");
        document.getElementById("error_cognom").textContent = "El cognom és obligatori";
        acumErrors++;
    }

    // validar provincia
    if (provincia.value == "") {
        provincia.classList.add("is-invalid");
        document.getElementById("error_provincia").textContent = "La província és obligatòria";
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

    // validar contrasenya
    if (contrasenya.value == "") {
        contrasenya.classList.add("is-invalid");
        document.getElementById("error_contrasenya").textContent = "La contrasenya és obligatòria";
        acumErrors++;
    } else if (!validar_contrasenya(contrasenya.value)) {
        contrasenya.classList.add("is-invalid");
        document.getElementById("error_contrasenya").innerText = "La contrasenya ha de tenir com a mínim 6 caràcters.\nHa de contenir 1 majúscula, 1 minúscula i 1 número";
        acumErrors++;
    }

    // validar confirmació contrasenya
    if (contrasenya2.value == "") {
        contrasenya2.classList.add("is-invalid");
        document.getElementById("error_contrasenya2").textContent = "La contrasenya és obligatòria";
        acumErrors++;
    } else if (contrasenya2.value != contrasenya.value) {
        contrasenya2.classList.add("is-invalid");
        document.getElementById("error_contrasenya2").textContent = "Les contrasenyes no coincideixen";
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

function validar_contrasenya(contrasenya) {
    var regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/; // mínim 6 chars, 1 minúscula, 1 majúscula i 1 número sense espais.
    return regex.test(contrasenya) ? true : false;
}
