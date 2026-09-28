document.addEventListener("DOMContentLoaded", () => {
    let cliqueContador = 0;
    let cliqueTimer;
    let animacaoRodando = false;

    const profilePic = document.querySelector('.profile-pic');
    
    if (!profilePic) return;

    profilePic.addEventListener('click', (e) => {
        if (animacaoRodando) return;

        cliqueContador++;

        const pic = e.currentTarget;
        pic.classList.add('saltar');
        setTimeout(() => pic.classList.remove('saltar'), 150);

        clearTimeout(cliqueTimer);
        cliqueTimer = setTimeout(() => {
            cliqueContador = 0;
        }, 3000); 

        if (cliqueContador === 10) {
            animacaoRodando = true;
            tremerBotoes();
            cliqueContador = 0; 

            setTimeout(() => {
                animacaoRodando = false;
            }, 1500); 
        }
    });
});

function tremerBotoes() {
    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(botao => {
        botao.classList.add('efeito1-easteregg');
        setTimeout(() => {
            botao.classList.remove('efeito1-easteregg');
        }, 1500);
    });
}
