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

  const x = (w - drawW) / 2
  const y = (h - drawH) / 2

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