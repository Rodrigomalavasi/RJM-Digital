class scroll {
    constructor() {
        this.divServicos = document.querySelector('.banner-servicos-divs')
        this.contato = document.querySelector('.contato')
        this.tituloContato = document.querySelector('.titulo-contato')
        this.contatoConteudo = document.querySelector('.contatos-infos')
    }

    calculaSrcoll() {
        const posicaoServicos = this.divServicos.getBoundingClientRect()['y']
        const posicaoContato = this.contato.getBoundingClientRect()['y']

        if(posicaoServicos <= 665) {
            this.divServicos.classList.add('servicos-animacao')
        }

        if(posicaoContato <= 627) {
            this.contato.classList.add('contato-animacao')
            this.contatoConteudo.classList.add('contatos-infos-animacao')
        }
    }
}

export {scroll}
