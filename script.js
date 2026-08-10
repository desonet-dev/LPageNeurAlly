document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Obrigado pelo contato! Sua mensagem foi enviada com sucesso.");
      formContato.reset();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {

    const wrapperDepoimento = document.getElementById('testimonial-wrapper');
    const depoimentos = document.querySelectorAll('.cartao-depoimento');
    const containerPontosDepoimento = document.getElementById('testimonial-dots');
    let indiceDepoimento = 0;
    let intervaloDepoimento;

    if (wrapperDepoimento && depoimentos.length > 0 && containerPontosDepoimento) {
        containerPontosDepoimento.innerHTML = '';

        depoimentos.forEach((_, i) => {
            const ponto = document.createElement('button');
            ponto.classList.add('ponto');
            ponto.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
            if (i === 0) ponto.classList.add('ativo');

            ponto.addEventListener('click', () => {
                irParaDepoimento(i);
                reiniciarTimerDepoimento();
            });
            containerPontosDepoimento.appendChild(ponto);
        });

        function irParaDepoimento(indice) {
            indiceDepoimento = indice;
            wrapperDepoimento.style.transform = `translateX(-${indice * 100}%)`;
            const pontos = containerPontosDepoimento.querySelectorAll('.ponto');
            pontos.forEach((p, i) => p.classList.toggle('ativo', i === indice));
        }

        function iniciarTimerDepoimento() {
            intervaloDepoimento = setInterval(() => {
                indiceDepoimento = (indiceDepoimento + 1) % depoimentos.length;
                irParaDepoimento(indiceDepoimento);
            }, 4500);
        }

        function reiniciarTimerDepoimento() {
            clearInterval(intervaloDepoimento);
            iniciarTimerDepoimento();
        }

        iniciarTimerDepoimento();
    }

    const telasApp = document.getElementById('app-screens');
    const cartoesTela = document.querySelectorAll('.cartao-tela');
    const cartaoPreviaApp = document.querySelector('.cartao-previa-app');
    let indiceApp = 0;
    let intervaloApp;

    if (telasApp && cartoesTela.length > 0) {
        const botaoPrev = document.getElementById('prev-btn');
        const botaoNext = document.getElementById('next-btn');
        if (botaoPrev) botaoPrev.remove();
        if (botaoNext) botaoNext.remove();

        const telasVisiveis = 3;
        const totalTelas = cartoesTela.length;
        const totalPassos = Math.max(1, totalTelas - telasVisiveis + 1);

        const containerPontosApp = document.createElement('div');
        containerPontosApp.classList.add('pontos-carrossel');
        
        if (cartaoPreviaApp && cartaoPreviaApp.parentNode) {
            cartaoPreviaApp.parentNode.appendChild(containerPontosApp);
        }

        const larguraPasso = 352;

        for (let i = 0; i < totalPassos; i++) {
            const ponto = document.createElement('button');
            ponto.classList.add('ponto');
            ponto.setAttribute('aria-label', `Ir para tela ${i + 1}`);
            if (i === 0) ponto.classList.add('ativo');
            
            ponto.addEventListener('click', () => {
                irParaTelaApp(i);
                reiniciarTimerApp();
            });
            containerPontosApp.appendChild(ponto);
        }

        function irParaTelaApp(indice) {
            indiceApp = indice;
            telasApp.style.transform = `translateX(-${indice * larguraPasso}px)`;

            const pontos = containerPontosApp.querySelectorAll('.ponto');
            pontos.forEach((p, i) => p.classList.toggle('ativo', i === indice));
        }

        function iniciarTimerApp() {
            intervaloApp = setInterval(() => {
                indiceApp = (indiceApp + 1) % totalPassos;
                irParaTelaApp(indiceApp);
            }, 3500);
        }

        function reiniciarTimerApp() {
            clearInterval(intervaloApp);
            iniciarTimerApp();
        }

        irParaTelaApp(0);
        iniciarTimerApp();
    }

});