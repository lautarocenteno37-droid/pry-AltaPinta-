const NavElements =[ /* Inicio, Remeras, Pantalones, Zapatillas*/
    {title:'Inicio', link:'./home.html'},
    {title:'Remeras', link:'./Remeras.html'},
    {title:'Pantalones', link:'./Pantalones.html'},
    {title:'Zapatillas', link:'./Zapatillas.html'},
]
const NavElementsLog =[ /* Iniciar sesion y Registrarse*/ 
    {title:'Cerrar sesion', link:'../pages/login/iniciarsesion.html'},
    {title:'Ver carrito', link:'./carrito.html'},
]

const NavBar = ` 
        <nav class="nav">
            <ul class="nav__list">
                ${
                    NavElements.map(e=>{
                        return `  <li class="nav__item">
                    <a href="${e.link}" class="nav__link nav--input">${e.title}</a>
                </li>` 
                    }).join('')
                } 
                ${
                    NavElementsLog.map(e=>{
                        return `  <li class="nav__item">
                    <a href="${e.link}" class="nav__link link--button">${e.title}</a>
                </li>` 
                    }).join('')
                }
            </ul>
        </nav>
`
let NavConteiner = document.querySelector('header')
window.addEventListener('load', () => {
    NavConteiner.innerHTML = NavBar
})
