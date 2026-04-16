import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Find Your Root.<br/>Find Your Reason.</h1>
          <p className={styles.subtitle}>
            Reject the superficial swipe. Cove is the highly-vetted matchmaking ecosystem for the Caribbean diaspora—engineered for deep psychological alignment and cultural connection.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/auth" className="btn-primary">
              Apply for Cove
            </Link>
            <Link href="#about" className="btn-outline">
              The Protocol
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className={styles.valueProps}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          Real Compatibility, Engineered.
        </h2>
        <p style={{ maxWidth: '600px', textAlign: 'center', color: 'rgba(230, 237, 217, 0.7)', lineHeight: '1.6' }}>
          We don't do blind dates. The Cove Vetting Engine analyzes deep psychological frameworks—Attachment Styles, Love Languages, and Sociological upbringing.
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🌴</div>
            <h3 className={styles.cardTitle}>Cultural Roots</h3>
            <p className={styles.cardText}>
              Connection begins at home. We match based on shared Caribbean heritage, upbringing, and sociological values.
            </p>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🧠</div>
            <h3 className={styles.cardTitle}>Psychological Vetting</h3>
            <p className={styles.cardText}>
              Our engine cross-references Attachment Styles and Conflict Resolution archetypes to ensure long-term harmony.
            </p>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>💍</div>
            <h3 className={styles.cardTitle}>Serious Intent</h3>
            <p className={styles.cardText}>
              Built exclusively for those seeking marriage and legacy building. The application process weeds out the uncommitted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
