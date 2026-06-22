/**
 * Text that slides its duplicate up into place (turning accent) on hover —
 * the classic kinetic nav/link interaction.
 */
export default function HoverLink({ text, className = '' }) {
  return (
    <span className={`hover-link ${className}`}>
      <span className="hover-in">
        {text}
        <span className="hover-dup">{text}</span>
      </span>
    </span>
  )
}
