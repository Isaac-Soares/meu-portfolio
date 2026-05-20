/* ===================================================
   🕹️ INTERACTIONS.JS - CLIQUE RESPONSIVO NA TELA DO MONITOR
   =================================================== */

// 🎯 Dimensões reais de fábrica do seu arquivo "typing1.jpeg"
const IMG_ORIGINAL_W = 1920; 
const IMG_ORIGINAL_H = 1080;

// 🎯 COORDENADAS DA TELA DO MONITOR NA IMAGEM ORIGINAL (1920x1080)
const MONIT_X_MIN = 1050; // Borda esquerda da tela do monitor
const MONIT_X_MAX = 1520; // Borda direita da tela do monitor
const MONIT_Y_MIN = 300;  // Borda superior da tela do monitor
const MONIT_Y_MAX = 630;  // Borda inferior da tela do monitor

export function initInteractions() {
  const desktopScreen = document.getElementById("desktop-screen");
  const indicador = document.querySelector(".indicador-clique.pixel-art");

  // Calcula os limites reais do monitor com base no tamanho atual da janela do navegador
  function obterLimitesAtuaisDoMonitor() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const imgRatio = IMG_ORIGINAL_W / IMG_ORIGINAL_H;
    const screenRatio = w / h;

    let drawW, drawH, imgX, imgY;

    // Espelha a lógica Cover do seu main.js
    if (imgRatio > screenRatio) {
      drawH = h;
      drawW = IMG_ORIGINAL_W * (h / IMG_ORIGINAL_H);
    } else {
      drawW = w;
      drawH = IMG_ORIGINAL_H * (w / IMG_ORIGINAL_W);
    }

    imgX = (w - drawW) / 2;
    imgY = (h - drawH) / 2;

    const escala = drawW / IMG_ORIGINAL_W;

    // Retorna as coordenadas exatas ajustadas para a tela atual do usuário
    return {
      xMin: imgX + (MONIT_X_MIN * escala),
      xMax: imgX + (MONIT_X_MAX * escala),
      yMin: imgY + (MONIT_Y_MIN * escala), // 🛠️ CORRIGIDO: Agora usa MONIT_Y_MIN
      yMax: imgY + (MONIT_Y_MAX * escala),
      
      // Centro aproximado do monitor para o balão "CLICK HERE" ficar bem posicionado
      centroX: imgX + (((MONIT_X_MIN + MONIT_X_MAX) / 2) * escala),
      centroY: imgY + (((MONIT_Y_MIN + MONIT_Y_MAX) / 2) * escala),
      
      // Limites de clique reais
      clickXMin: imgX + (MONIT_X_MIN * escala),
      clickXMax: imgX + (MONIT_X_MAX * escala),
      clickYMin: imgY + (MONIT_Y_MIN * escala),
      clickYMax: imgY + (MONIT_Y_MAX * escala)
    };
  }

  // Posiciona dinamicamente o balão "CLICK HERE" no centro do monitor
  function reposicionarIndicador() {
    if (indicador && !desktopScreen.classList.contains("active")) {
      const monitor = obterLimitesAtuaisDoMonitor();
      // Centraliza o balão perfeitamente na tela do monitor virtual baseado nos seus ajustes
      indicador.style.top = `${monitor.centroY - 5}px`; 
      indicador.style.left = `${monitor.centroX}px`;
    }
  }

  // Inicializa o posicionamento e monitora alterações se arrastar a janela de monitor
  setTimeout(reposicionarIndicador, 100);
  window.addEventListener("resize", reposicionarIndicador);

  // Escuta os cliques em qualquer lugar da tela
  window.addEventListener("click", (event) => {
    // 🔒 TRAVA RETRO: Se o Desktop já estiver ativo, corta cliques que iriam para o cenário de fundo
    if (desktopScreen.classList.contains("active")) {
      // Se o clique foi no botão de fechar o desktop, permite passar para conseguir sair do OS
      if (event.target.id === "close-desktop" || event.target.closest("#close-desktop")) return;
      
      // Para qualquer outro clique com o OS aberto (como jogar Minecraft), bloqueia a física do quarto
      return; 
    }

    const monitor = obterLimitesAtuaisDoMonitor();
    const cliqueX = event.clientX;
    const cliqueY = event.clientY;

    // VERIFICAÇÃO RETANGULAR: O clique aconteceu dentro das bordas do monitor?
    const clicouNoMonitor = (cliqueX >= monitor.clickXMin && cliqueX <= monitor.clickXMax) &&
                            (cliqueY >= monitor.clickYMin && cliqueY <= monitor.clickYMax);

    if (clicouNoMonitor) {
      desktopScreen.classList.add("active");
      if (indicador) {
        indicador.style.opacity = "0";
        indicador.style.visibility = "hidden";
      }
    }
  });
}