const larguraDaTela = window.screen.width;

if (larguraDaTela <= 740) {
    const servicos = document.querySelectorAll('#servico');

    servicos.forEach(servico => {
        servico.addEventListener('click', mostraServico);
    });

    function mostraServico() {
        const descricao = this.nextElementSibling;
        descricao.classList.toggle('visivel');
    }
}
