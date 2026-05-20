export const canvas =
document.getElementById("canvas")

export const ctx =
canvas.getContext("2d")

export function initCanvas() {

  function resize() {

    const dpr =
    window.devicePixelRatio || 1

    canvas.width =
    window.innerWidth * dpr

    canvas.height =
    window.innerHeight * dpr

    canvas.style.width =
    window.innerWidth + "px"

    canvas.style.height =
    window.innerHeight + "px"

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    )

  }

  resize()

  window.addEventListener(
    "resize",
    resize
  )

}