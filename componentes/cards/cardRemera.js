const CardRemeras = [
    { 
    id: "1", 
    imagen: "../img/RemeraOversizeNegra1.png", 
    titulo: "Remera Oversize Classic", 
    precio: "27.000$", 
    talle: ["XS", "S", "M", "L"],
    marca: "Stussy"
    },
    { 
    id: "2", 
    imagen: "../img/ChombaCuerdosNegra.jpg", 
    titulo: "Polo 85 Negro Oversize", 
    precio: "70.000$", 
    talle: ["S", "M", "L", "XL"],
    marca: "Cuerdos" 
    }
];

const contenedor = document.getElementById("Remeras");

const cardsHTML = CardRemeras.map(p => `
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
            <div class="nombre talle-nombre">TALLES</div>
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