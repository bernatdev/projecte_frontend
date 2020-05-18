// Selecció elements de text
var mot_cerca = document.getElementById("mot_cerca");

// Configuració event listener
form_cerca.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);

// funció de validació
function ValidarCerca() {

    var acumErrors = 0;
    form_cerca.classList.remove('is-invalid');

    // validar confirmació contrasenya
    if (mot_cerca.value.length<4) {
        mot_cerca.classList.add("is-invalid");
        document.getElementById("error_mot_cerca").textContent = "El mot ha de tenir més de 3 caràcters";
        acumErrors++;
    }

    if (acumErrors > 0) {
        return false;
    } else {
        return true;
    }
}

