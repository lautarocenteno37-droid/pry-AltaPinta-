const CardZapatillas = [
    { 
    id: "1", 
    imagen: "../../img/blackphantom.jpg", 
    titulo: "Black-Phantom", 
    precio: "120.000$", 
    talle: ["XS", "S", "M", "L"],
    marca: "Nike x Travis Scott"  
    },
    { 
    id: "2", 
    imagen: "../../img/Airforce1.jpg", 
    titulo: "AirForce 1 Blancas", 
    precio: "60.000$", 
    talle: ["S", "M", "L", "XL"],
    marca: "Nike" 
    }
];

const contenedor = document.getElementById("Zapatillas");

const cardsHTML = CardZapatillas.map(p => `
    <div class="conteiner">
    <div class="imagen">
        <img src="${p.imagen}" alt="${p.titulo}">
    </div>
    <div class="card-content">
        <div class="wrapper">
        <div class="titulo">${p.titulo}</div>
        <p>${p.marca}</p>
        <div class="precio">${p.precio}</div>

        <div class="content talle">
            <div class="nombre talle-nombre">TALLE</div>
            <div class="talle-valor">
            ${p.talle.map(t => `<span>${t}</span>`).join("")}
            </div>

            <div class="btn">
            <button class="button">Comprar</button>
            <button class="button">Añadir al Carrito</button>
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