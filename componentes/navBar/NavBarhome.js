const NavElementsPages =[ /* Inicio, Remeras, Pantalones, Zapatillas*/
    {title:'Inicio', link:'./home.html'},
    {title:'Remeras', link:'../remeras.html'},
    {title:'Pantalones', link:'../pantalones.html'},
    {title:'Zapatillas', link:'../zapatillas.html'},
]
const NavElementsLog =[ /* Iniciar sesion y Registrarse*/ 
    {title:'iniciar sesion', link:'../login/iniciarsesion.html'},
    {title:'Registrarse', link:'../signup/crearCuenta.html'},
]

const NavBar = ` 
        <nav class="nav">
            <ul class="nav__list">
                ${
                    NavElementsPages.map(e=>{
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
