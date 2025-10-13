"use client"
import { useEffect, useRef } from "react"

export function CursorAura() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const particles: { x: number; y: number; vx: number; vy: number; color: string }[] = []
    const colors = ["#ff66cc", "#66ccff", "#8fff9f", "#ffcc66"]

    // create aura particles on mouse move
    const handleMove = (e: MouseEvent) => {
      for (let i = 0; i < 6; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    window.addEventListener("mousemove", handleMove)

    function loop() {
      // fade background slightly to leave trailing glow
      ctx.fillStyle = "rgba(0,0,0,0.08)"
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.96
        p.vy *= 0.96

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 40)
        grad.addColorStop(0, p.color + "ff")
        grad.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.fillStyle = grad
        ctx.arc(p.x, p.y, 40, 0, Math.PI * 2)
        ctx.fill()
      }

      if (particles.length > 400) particles.splice(0, 100)
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
      window.removeEventListener("mousemove", handleMove)
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
      }}
    />
  )
}
