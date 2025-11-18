const contenedor = document.getElementById("Remeras");

fetch("../../data/productos.json")  
    .then(res => res.json())
    .then(productos => {

        const Remeras = productos.filter(item => item.id.startsWith("Remera"));

        const cardsHTML = Remeras.map(p => `
            <div class="conteiner">
                <div class="imagen">
                    <img src="${p.imagen}" alt="${p.titulo}">
                </div>

                <div class="card-content">
                    <div class="wrapper">
                        <div class="titulo">${p.titulo}</div>
                        <p>${p.marca}</p>
                        <div class="precio">$${p.precio}</div>

                        <div class="content talle">
                            <div class="nombre talle-nombre">TALLE</div>

                            <div class="talle-valor">
                                ${p.talle.map(t => `<span>${t}</span>`).join("")}
                            </div>

                            <div class="btn">
                                <button class="button">Comprar</button>

                                <button 
                                    class="button btn-carrito" 
                                    data-producto='${JSON.stringify(p)}'>
                                    Añadir al Carrito
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");

        contenedor.innerHTML = `
            <div class="crd">
                ${cardsHTML}
            </div>
        `;


        //  BOTONES AÑADIR AL CARRITO


        const botonesCarrito = document.querySelectorAll(".btn-carrito");

        botonesCarrito.forEach(btn => {
            btn.addEventListener("click", () => {

                const producto = JSON.parse(btn.dataset.producto);

                // Obtener carrito actual
                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

                // Buscar si ya existe
                const index = carrito.findIndex(item => item.id === producto.id);

                if (index !== -1) {
                    // Ya existe → Aumento cantidad
                    carrito[index].cantidad++;
                } else {
                    // No existe → Crear con cantidad = 1
                    producto.cantidad = 1;
                    carrito.push(producto);
                }

                // Guardar carrito
                localStorage.setItem("carrito", JSON.stringify(carrito));

                alert("Producto añadido al carrito!");
            });
        });

    })
    .catch(err => console.error("Error cargando productos.json:", err));