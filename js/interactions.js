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

export function initInteractions() {
  const desktopScreen = document.getElementById("desktop-screen");
  const indicador = document.querySelector(".indicador-clique.pixel-art");

  function obterLimitesAtuaisDoMonitor() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const imgRatio = IMG_ORIGINAL_W / IMG_ORIGINAL_H;
    const screenRatio = w / h;

    let drawW, drawH;

    if (imgRatio > screenRatio) {
      drawH = h;
      drawW = IMG_ORIGINAL_W * (h / IMG_ORIGINAL_H);
    } else {
      drawW = w;
      drawH = IMG_ORIGINAL_H * (w / IMG_ORIGINAL_W);
    }

    // 🔥 A MESMA MATEMÁTICA DO MAIN.JS, AGORA INDEPENDENTE 🔥
    let xOffset = 0.5; // Padrão PC (Centro)
    if (w <= 768) {
      xOffset = 0.70; // Padrão Celular (Deslizado para a direita). Mude aqui se precisar afinar a mira!
    }

    const imgX = (w - drawW) * xOffset;
    const imgY = (h - drawH) / 2;
    const escala = drawW / IMG_ORIGINAL_W;

    return {
      clickXMin: imgX + (MONIT_X_MIN * escala),
      clickXMax: imgX + (MONIT_X_MAX * escala),
      clickYMin: imgY + (MONIT_Y_MIN * escala),
      clickYMax: imgY + (MONIT_Y_MAX * escala),
      
      centroX: imgX + (((MONIT_X_MIN + MONIT_X_MAX) / 2) * escala),
      centroY: imgY + (((MONIT_Y_MIN + MONIT_Y_MAX) / 2) * escala)
    };
  }

  function reposicionarIndicador() {
    if (indicador && !desktopScreen.classList.contains("active")) {
      const monitor = obterLimitesAtuaisDoMonitor();
      
      // Removemos o !important do JS para não dar tela azul no PC kkkk
      indicador.style.top = `${monitor.centroY - 5}px`; 
      indicador.style.left = `${monitor.centroX}px`;
    }
  }

  setTimeout(reposicionarIndicador, 100);
  window.addEventListener("resize", reposicionarIndicador);

  window.addEventListener("click", (event) => {
    if (desktopScreen.classList.contains("active")) {
      if (event.target.id === "close-desktop" || event.target.closest("#close-desktop")) return;
      return; 
    }

    const monitor = obterLimitesAtuaisDoMonitor();
    const cliqueX = event.clientX;
    const cliqueY = event.clientY;

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