const CardPantalon = [
    { 
    id: "1", 
    imagen: "../../../img/BaggyJeanGris.jpg", 
    titulo: "Pantalon Baggy", 
    precio: "40.000$", 
    talle: ["XS", "S", "M", "L"], 
    marca: "Stussy"
    },
    { 
    id: "2", 
    imagen: "../../../img/PantalonCargoVerde.jpg", 
    titulo: "Pantalon Cargo Verde", 
    precio: "50.000$", 
    talle: ["S", "M", "L", "XL"],
    marca: "Pampero" 
    }
];

const contenedor = document.getElementById("pantalones");

const cardsHTML = CardPantalon.map(p => `
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

