const botonTema = document.getElementById("toggle-tema");

// cargar tema guardado
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "light") {
    document.body.classList.add("light");
}

// cambiar tema
botonTema.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("tema", "light");
    } else {
        localStorage.setItem("tema", "dark");
    }
});
