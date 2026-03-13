import { motion } from 'framer-motion'

export default function PageLoader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="flex flex-col items-center gap-4">
        {/* Initials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-6xl text-accent"
        >
          KY
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={onComplete}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs text-muted tracking-widest"
        >
          Loading
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
