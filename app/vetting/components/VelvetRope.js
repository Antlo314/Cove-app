import { motion } from 'framer-motion';

export default function VelvetRope({ styles }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={styles.velvetRopeContainer}
    >
      <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⏳</div>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--cove-accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Under Review</h1>
      
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(230, 237, 217, 0.8)', maxWidth: '400px', margin: '0 auto 2rem' }}>
        Your psychological and sociological protocol has been secured. Due to the highly curated nature of Cove, all profiles undergo a strict manual vetting process against our existing ecosystem.
      </p>

      <p style={{ fontSize: '0.9rem', color: 'rgba(230, 237, 217, 0.5)', borderTop: '1px solid var(--cove-border)', paddingTop: '2rem' }}>
        You will be notified within 48 hours if your protocol aligns with our current matchmaking registry.
      </p>
    </motion.div>
  );
}
