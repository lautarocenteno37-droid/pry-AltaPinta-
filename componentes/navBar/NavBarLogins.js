const NavElements =[
    {title:'Inicio', link:'../../pages/home/home.html'},
    {title:'Remeras', link:'../../pages/Remeras.html'},
    {title:'Pantalones', link:'../../pages/Pantalones.html'},
    {title:'Zapatillas', link:'../../pages/Zapatillas.html'},
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
