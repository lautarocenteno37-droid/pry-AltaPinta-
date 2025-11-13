const NavElements =[
    {title:'Inicio', link:'../index.html'},
    {title:'Remeras', link:'./Remeras.html'},
    {title:'Pantalones', link:'./Pantalones.html'},
    {title:'Zapatillas', link:'./Zapatillas.html'},
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
