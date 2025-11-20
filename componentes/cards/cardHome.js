const contenedor = document.getElementById("home");

fetch("../../data/productos.json")   // cambia la ruta según tu proyecto
    .then(res => res.json())
    .then(productos => {

        // Agrupar productos según su ID
        const remeras = productos.filter(p => p.id.startsWith("Remera"));
        const pantalones = productos.filter(p => p.id.startsWith("Pantalon"));
        const zapatillas = productos.filter(p => p.id.startsWith("Zapatilla"));

        function crearCards(lista) {
            return lista.map(p => `
                
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
        }

        contenedor.innerHTML = `
            <div class="crd">${crearCards(remeras)}</div>
            <h2>Remeras</h2>
            
            <div class="crd">${crearCards(pantalones)}</div>
            <h2>Pantalones</h2>
            
            <div class="crd">${crearCards(zapatillas)}</div>
            <h2>Zapatillas</h2>
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
