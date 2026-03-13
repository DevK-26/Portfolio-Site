import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse)
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const cursor = cursorRef.current
    let x = 0, y = 0

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (cursor) {
        cursor.style.left = `${x}px`
        cursor.style.top = `${y}px`
      }
      if (!visible) setVisible(true)
    }

    const over = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(true)
      }
    }

    const out = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(false)
      }
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [visible])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{ opacity: visible ? 1 : 0 }}
    />
  )
}
