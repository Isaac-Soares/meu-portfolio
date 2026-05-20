export function updateLed(ctx, canvas) {
  const color = "white"

  const w = canvas.width * 0.6
  const h = 12

  const x = (canvas.width - w) / 2
  const y = canvas.height * 0.12

  // 💡 glow (luz ambiente)
  ctx.save()
  ctx.globalAlpha = 0.15
  ctx.fillStyle = color
  ctx.filter = "blur(30px)"
  ctx.fillRect(x, y, w, h)
  ctx.restore()

  // 💡 barra principal (bem sutil)
  ctx.save()
  ctx.globalAlpha = 0.35
  ctx.fillStyle = color
  ctx.filter = "blur(2px)"
  ctx.fillRect(x, y, w, h)
  ctx.restore()
}