const NavElements =[
    {title:'Inicio', link:'../home/home.html'},
    {title:'Remeras', link:'../remeras.html'},
    {title:'Pantalones', link:'../pantalones.html'},
    {title:'Zapatillas', link:'../zapatillas.html'},
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
            </ul>
        </nav>
`
let NavConteiner = document.querySelector('header')
window.addEventListener('load', () => {
    NavConteiner.innerHTML = NavBar
})
