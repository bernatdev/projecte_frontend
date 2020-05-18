// Selecció elements de text
var correu = document.getElementById("correu");
var contrasenya = document.getElementById("contrasenya");

// Configuració event listener
form_login.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);



// funció de validació
function ValidarLogin() {

    var acumErrors = 0;
    form_login.classList.remove('is-invalid');

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


function validar_contrasenya(contrasenya) {
    var regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/; // mínim 6 chars, 1 minúscula, 1 majúscula i 1 número sense espais.
    return regex.test(contrasenya) ? true : false;
}
