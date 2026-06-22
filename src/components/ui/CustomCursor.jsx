import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const dot = dotRef.current
    const ring = ringRef.current

    // mouse target + lerped ring position
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...mouse }
    let rafId

    const move = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dot) {
        dot.style.left = `${mouse.x}px`
        dot.style.top = `${mouse.y}px`
      }
      if (!visible) setVisible(true)
    }

    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18
      ringPos.y += (mouse.y - ringPos.y) * 0.18
      if (ring) {
        ring.style.left = `${ringPos.x}px`
        ring.style.top = `${ringPos.y}px`
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, .magnetic'
    const over = (e) => { if (e.target.closest(INTERACTIVE)) setHovering(true) }
    const out  = (e) => { if (e.target.closest(INTERACTIVE)) setHovering(false) }
    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [visible])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: visible ? 1 : 0 }} />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  )
}
