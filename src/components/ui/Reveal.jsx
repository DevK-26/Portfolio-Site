import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Original SplitText-style scroll reveal. Splits plain-text children into words
 * (or characters), clips each in an overflow-hidden mask, and rises them into
 * place on scroll via GSAP ScrollTrigger. No GSAP Club/trial plugins used.
 *
 * Pass a single string child.
 */
export default function Reveal({
  children,
  as = 'div',
  type = 'words',        // 'words' | 'chars'
  className = '',
  stagger = 0.045,
  duration = 0.9,
  start = 'top 85%',
  once = true,
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const text = String(children)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const clipStyle = (node) => {
      node.style.display = 'inline-block'
      node.style.overflow = 'hidden'
      node.style.verticalAlign = 'top'
      // generous bottom room so descenders (g, y, p) are never clipped;
      // negative margin keeps layout metrics unchanged.
      node.style.paddingBottom = '0.2em'
      node.style.marginBottom = '-0.2em'
    }

    el.textContent = ''
    const units = []
    const words = text.split(' ')

    words.forEach((word, wi) => {
      if (type === 'chars') {
        // keep each word unbreakable, split its characters
        const wordWrap = document.createElement('span')
        wordWrap.style.display = 'inline-block'
        wordWrap.style.whiteSpace = 'nowrap'
        ;[...word].forEach((ch) => {
          const clip = document.createElement('span')
          clipStyle(clip)
          const inner = document.createElement('span')
          inner.style.display = 'inline-block'
          inner.textContent = ch
          clip.appendChild(inner)
          wordWrap.appendChild(clip)
          units.push(inner)
        })
        el.appendChild(wordWrap)
      } else {
        const clip = document.createElement('span')
        clipStyle(clip)
        const inner = document.createElement('span')
        inner.style.display = 'inline-block'
        inner.textContent = word
        clip.appendChild(inner)
        el.appendChild(clip)
        units.push(inner)
      }
      if (wi < words.length - 1) el.appendChild(document.createTextNode(' '))
    })

    if (reduce) {
      gsap.set(units, { yPercent: 0, autoAlpha: 1 })
      return () => { el.textContent = text }
    }

    const anim = gsap.fromTo(
      units,
      { yPercent: 115, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    )

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
      el.textContent = text
    }
  }, [children, type, start, once, stagger, duration])

  const Tag = as
  return <Tag ref={ref} className={className}>{children}</Tag>
}
