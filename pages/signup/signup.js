function registrarUsuario() {
    const email = document.getElementById("txtemail").value;
    const pass = document.getElementById("txtpassword").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    const existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert("Este email ya está registrado.");
        return;
    }

    usuarios.push({ email, pass });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cuenta creada con éxito");
    window.location.href = "../login/iniciarsesion.html";
}