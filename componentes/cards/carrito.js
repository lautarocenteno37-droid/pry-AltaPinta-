
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos HTML
const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalHTML = document.getElementById("total");
const finalizarBtn = document.getElementById("finalizarCompra");

// ACTUALIZAR CARRITO

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function calcularTotal() {
    const total = carrito.reduce((acum, prod) => acum + prod.precio * prod.cantidad, 0);
    totalHTML.textContent = `$${total}`;
}

function renderCarrito() {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod, index) => {
        const item = document.createElement("div");
        item.classList.add("carrito-item");

        item.innerHTML = `
            <img src="${prod.imagen}" alt="Producto" class="carrito-img">

            <div class="carrito-detalle">
                <h3>${prod.titulo}</h3>
                <p class="marca">${prod.marca}</p>
                <p class="precio-item">$${prod.precio}</p>

                <div class="cantidad">
                    <button class="qty-btn restar">-</button>
                    <span class="qty">${prod.cantidad}</span>
                    <button class="qty-btn sumar">+</button>
                </div>
            </div>

            <button class="eliminar">✖</button>
        `;

        // Botón sumar
        item.querySelector(".sumar").addEventListener("click", () => {
            carrito[index].cantidad++;
            guardarCarrito();
            renderCarrito();
        });

        // Botón restar
        item.querySelector(".restar").addEventListener("click", () => {
            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad--;
            }
            guardarCarrito();
            renderCarrito();
        });

        // Botón eliminar
        item.querySelector(".eliminar").addEventListener("click", () => {
            carrito.splice(index, 1);
            guardarCarrito();
            renderCarrito();
        });

        contenedorCarrito.appendChild(item);
    });

    calcularTotal();
}


finalizarBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    alert("✔ Compra realizada con éxito!");

    carrito = []; // vaciar carrito
    guardarCarrito();
    renderCarrito();
});

// Render inicial
renderCarrito();
