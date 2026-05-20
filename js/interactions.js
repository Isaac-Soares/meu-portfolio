/* ===================================================
   🕹️ INTERACTIONS.JS - CLIQUE RESPONSIVO NA TELA DO MONITOR
   =================================================== */

// 🎯 Dimensões reais da imagem original
const IMG_ORIGINAL_W = 1920; 
const IMG_ORIGINAL_H = 1080;

// 🎯 COORDENADAS DO MONITOR
const MONIT_X_MIN = 1050; 
const MONIT_X_MAX = 1520; 
const MONIT_Y_MIN = 300;  
const MONIT_Y_MAX = 630;  

// Variáveis para guardar as coordenadas de clique calculadas
let clickBounds = null;
const indicador = document.querySelector(".indicador-clique.pixel-art");
const desktopScreen = document.getElementById("desktop-screen");

// 🔥 NOVA FUNÇÃO MASTER 🔥
// Ela é chamada pelo main.js sempre que a imagem é desenhada.
export function syncMonitorPositions(xDraw, yDraw, drawW, drawH) {
  const escala = drawW / IMG_ORIGINAL_W;

  // Calcula os limites de clique e o centro para o balão
  clickBounds = {
    xMin: xDraw + (MONIT_X_MIN * escala),
    xMax: xDraw + (MONIT_X_MAX * escala),
    yMin: yDraw + (MONIT_Y_MIN * escala),
    yMax: yDraw + (MONIT_Y_MAX * escala)
  };

  const centroX = xDraw + (((MONIT_X_MIN + MONIT_X_MAX) / 2) * escala);
  const centroY = yDraw + (((MONIT_Y_MIN + MONIT_Y_MAX) / 2) * escala);

  // Atualiza o balão "CLICK HERE" se ele existir
  if (indicador && !desktopScreen.classList.contains("active")) {
    indicador.style.top = `${centroY - 5}px`; 
    indicador.style.left = `${centroX}px`;
  }
}

// Escuta os cliques (o setup é feito apenas uma vez)
(function setupClickEventListener() {
  window.addEventListener("click", (event) => {
    // Se o OS já estiver aberto, corta cliques secundários no fundo
    if (desktopScreen.classList.contains("active")) {
      if (event.target.id === "close-desktop" || event.target.closest("#close-desktop")) return;
      return; 
    }

    // Se o main.js ainda não calculou os limites, ignora o clique
    if (!clickBounds) return;

    const cliqueX = event.clientX;
    const cliqueY = event.clientY;

    const clicouNoMonitor = (cliqueX >= clickBounds.xMin && cliqueX <= clickBounds.xMax) &&
                            (cliqueY >= clickBounds.yMin && cliqueY <= clickBounds.yMax);

    if (clicouNoMonitor) {
      desktopScreen.classList.add("active");
      if (indicador) {
        indicador.style.opacity = "0";
        indicador.style.visibility = "hidden";
      }
    }
  });
})();