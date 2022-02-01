$(document).ready(function () {
    $('boto-guardar').click(function () {
        var nom1 = document.getElementById("nomtxt").value;
        var cnom = document.getElementById("cognomtxt").value;
        var correu = document.getElementById("emailtxt").value;
        var pw = document.getElementById("contrasenyatxt").value;

        localStorage.setItem("Nom", nom1);
        localStorage.setItem("Cognoms", cnom);
        localStorage.setItem("Email", correu);
        localStorage.setItem("Contrasenya", pw);

        document.getElementById("nomtxt").value = "";
        document.getElementById("cognomtxt").value = "";
        document.getElementById("emailtxt").value = "";
        document.getElementById("contrasenyatxt").value = "";
    });
});
