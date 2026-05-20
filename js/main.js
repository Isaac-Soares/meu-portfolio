import {
  canvas,
  ctx,
  initCanvas
} from "./animations.js"

import {
  initInteractions
} from "./interactions.js"

import {
  initDesktop
} from "./desktop.js"

let roomImg = new Image()

/* =========================
   LOAD IMAGE
========================= */
function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
  })
}

/* =========================
   DRAW BACKGROUND
========================= */
function drawImageCover(img) {
  const w = window.innerWidth
  const h = window.innerHeight

  const imgRatio = img.width / img.height
  const screenRatio = w / h

  let drawW, drawH

  if (imgRatio > screenRatio) {
    drawH = h
    drawW = img.width * (h / img.height)
  } else {
    drawW = w
    drawH = img.height * (w / img.width)
  }

  /* 🔥 O SEGREDO ESTÁ AQUI 🔥 
     0.5 = Centralizado (Padrão do PC)
     0.75 = Empurra a imagem para a direita no celular (mostrando o monitor) */
  let xOffset = 0.5; 
  
  if (w <= 768) {
      xOffset = 0.70; /* ⬅️ AJUSTE ESSE NÚMERO! Tente 0.65, 0.75 ou 0.80 até o clique bater com o monitor */
  }

  const x = (w - drawW) * xOffset;
  const y = (h - drawH) / 2;

  // Salvamos os dados globais para evitar bugs no interactions.js
  window.bgData = { x, y, drawW, drawH };

  ctx.drawImage(img, x, y, drawW, drawH)
}

/* =========================
   DRAW
========================= */
function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  drawImageCover(roomImg)
}

/* =========================
   LOOP
========================= */
function animate() {
  draw()
  requestAnimationFrame(animate)
}

/* =========================
   INIT
========================= */
async function init() {
  roomImg = await loadImage("assets/room/white/typing1.jpeg")

  initCanvas()
  initInteractions()
  initDesktop()

  animate()
}

init()