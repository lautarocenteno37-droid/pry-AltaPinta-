function loguear() {
    const email = document.getElementById("txtemail").value.trim();
    const password = document.getElementById("txtpassword").value.trim();

    // Validación mínima
    if (email === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    // Si está todo bien → ir al home
    window.location.href = "../../private_pages/home.html"; 
}
