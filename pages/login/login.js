function loguear() {
    const email = document.getElementById("txtemail").value.trim();
    const password = document.getElementById("txtpassword").value.trim();

    if (email === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    sessionStorage.setItem("usuarioLogueado", JSON.stringify({
        email: email,
        logueado: true
    }));

    // Redirigir al home
    window.location.href = "../../private_pages/home.html";
}

