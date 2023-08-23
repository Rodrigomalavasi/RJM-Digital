import { scroll } from './scroll.js'

window.onload = () => {
    const posicaoScroll = new scroll()
    document.addEventListener('scroll', posicaoScroll.calculaSrcoll.bind(posicaoScroll))
}
