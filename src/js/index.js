/* código responsável pela troca de imagem, nome e descrição dos personagens que são selecionados */
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        /* "mouseenter" se quiser que o card seja responsivo quando passar o mouse por cima, deixei pra click por preferência*/
        
        if(window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');
        /* esse selecionado vem lá do 1° card que declaramos, o único diferente dos restantes..serve para facilitar o uso do "selecionado"*/

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);

    })
});

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}-1.png`;

    /* o id de personogame declarado no html tem que ser o mesmo do arquivo de imagem..se "id=Lince" então a imagem tem que ser "Lince-1.png ou Lince-1.jpg", a questão da adição do "-1" é para facilitar na hora de identificar o card certo, por todas as imagens estarem juntas em uma única pasta..basicamente pra facilitar a busca*/
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

/* código responsável pela animação de teclado escrevendo na borda (footer)*/
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#simpleUsage",{
    strings: "Desenvolvido por Lucas Silva. 🦆",
    speed: 80,
    /* quanto maior a velocidade, mais devagar a animação acontece*/
    waitUntilVisible: true,
    loop: true,
    }).go();
    
    /*implementação para automatizar a questão de escrever a marca e reiniciar a mesma dentro do js, sem a necessidade do uso de keyframes ou de muitas linhas de código*/
})

