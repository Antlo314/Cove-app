export default function Step1Cultural({ data, updateData, styles }) {
  const flags = [
    { code: 'jm', name: 'Jamaica' },
    { code: 'tt', name: 'Trinidad & Tobago' },
    { code: 'bb', name: 'Barbados' },
    { code: 'bs', name: 'Bahamas' },
    { code: 'gy', name: 'Guyana' },
    { code: 'ht', name: 'Haiti' },
    { code: 'lc', name: 'St. Lucia' },
    { code: 'gd', name: 'Grenada' }
  ];

  return (
    <>
      <h2 className={styles.stepTitle}>Cultural Roots</h2>
      <p className={styles.stepDescription}>Select your primary country of heritage. This helps us align core cultural values.</p>
      
      <div className={styles.selectionGrid}>
        {flags.map(flag => (
          <div 
            key={flag.code}
            className={`${styles.selectionCard} ${data.countryCode === flag.code ? styles.active : ''}`}
            onClick={() => updateData({ countryCode: flag.code, flag: flag.name })}
          >
            <span className={`fi fi-${flag.code} ${styles.flagIcon}`}></span>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>{flag.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
