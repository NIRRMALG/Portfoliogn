"use client"
import { useEffect, useRef } from "react"

export function CursorAura() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      color: string
    }[] = []
    const colors = ["#ff66cc", "#66ccff", "#9effa1", "#ffd580"]

    // Mouse trail emitter
    window.addEventListener("mousemove", (e) => {
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    })

    function loop() {
      // slightly translucent fill to keep the smooth fading
      ctx.fillStyle = "rgba(0,0,0,0.1)"
      ctx.fillRect(0, 0, w, h)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.96
        p.vy *= 0.96
        p.life -= 0.012

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        const size = 50 * p.life
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size)
        grad.addColorStop(0, p.color)
        grad.addColorStop(1, "transparent")

        ctx.globalCompositeOperation = "lighter" // blend like light
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      requestAnimationFrame(loop)
    }

    loop()

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "screen",
        filter: "blur(10px)",
      }}
    />
  )
}
