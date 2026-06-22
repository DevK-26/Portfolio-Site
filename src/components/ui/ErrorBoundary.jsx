import { Component } from 'react'

/**
 * Renders `fallback` (default: nothing) if a child throws — used to keep a
 * WebGL/Three.js failure from blanking the whole page on devices without it.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error) {
    // Non-fatal: the 3D centerpiece is decorative.
    if (import.meta.env.DEV) console.warn('[ErrorBoundary] caught', error)
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null
    return this.props.children
  }
}
