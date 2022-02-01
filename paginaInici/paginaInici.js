$(document).ready(function () {
    $('#boto-cargar').click(function () {
        var nom1 = localStorage.getItem("Nom");
        var cogns = localStorage.getItem("Cognoms");
        var correu1 = localStorage.getItem("Email");
        var pw1 = localStorage.getItem("Contrasenya");

        document.getElementById("nom1").innerHTML = nom1;
        document.getElementById("cogns").innerHTML = cogns;
        document.getElementById("correu1").innerHTML = correu1;
        document.getElementById("pw1").innerHTML = pw1;
    });
});

var emailUser = document.getElementById("correuUsuari").innerHTML;
var pwUser = document.getElementById("pwdUsuari").innerHTML;

function infoCorrecte() {
    if (emailUser === correu1) {
        if (pw === pw1) {
            document.write("Has iniciat sessió correctament!");
        }
        else {
            document.write("Has introduït la contrasenya incorrecte.");
        }
    }
    else {
        document.write("Has introduit el email incorrecte");
    };
};