const menuHamburguer = document.getElementById('menu-hamburguer')
const listaMenu = document.getElementById('menu-lista')
let menuAberto = false

menuHamburguer.addEventListener('click', abreEFechaMenu)
listaMenu.addEventListener('click', abreEFechaMenu)

function abreEFechaMenu() {

    if(menuAberto == true){
        listaMenu.style.display = 'none'
        menuAberto = false
    } else if(menuAberto == false) {
        listaMenu.style.display = 'block'
        menuAberto = true
    }
}