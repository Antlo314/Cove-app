import { motion } from 'framer-motion';

export default function AlgorithmicMirror({ payload, setReviewState, styles }) {
  const { psychological, culturalRoots } = payload;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.mirrorContainer}
    >
      <h2 style={{ fontSize: '2rem', color: 'var(--cove-accent)', marginBottom: '1rem' }}>Psychological Mirror</h2>
      <p style={{ color: 'rgba(230, 237, 217, 0.7)', marginBottom: '3rem' }}>
        Your data has been compiled. Here is how our engine interprets your protocol.
      </p>

      <div className={styles.auraCard}>
        <div className={styles.auraGlow}></div>
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The {culturalRoots.flag || 'Sovereign'} Archetype</h3>
          
          <div className={styles.mirrorStat}>
            <span className={styles.statLabel}>Attachment Core</span>
            <span className={styles.statValue}>{psychological.attachmentStyle.toUpperCase() || 'UNDEFINED'}</span>
          </div>

          <div className={styles.mirrorStat}>
            <span className={styles.statLabel}>Love Mechanism</span>
            <span className={styles.statValue}>{psychological.loveLanguage.replace('_', ' ').toUpperCase() || 'UNDEFINED'}</span>
          </div>

          <div className={styles.mirrorStat}>
            <span className={styles.statLabel}>Conflict Protocol</span>
            <span className={styles.statValue}>{psychological.conflictArchetype.toUpperCase() || 'UNDEFINED'}</span>
          </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary" 
        onClick={() => setReviewState(true)}
        style={{ marginTop: '3rem' }}
      >
        Submit Profile to Cove
      </motion.button>
    </motion.div>
  );
}
