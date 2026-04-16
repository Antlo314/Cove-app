import Image from 'next/image';

export default function Step5Aesthetics({ data, updateData, styles }) {
  const aesthetics = [
    { id: 'island', label: 'Island Authenticity', src: '/island.png' },
    { id: 'urban', label: 'Urban High-Society', src: '/urban.png' },
    { id: 'minimalist', label: 'Minimalist Luxury', src: '/minimalist.png' },
    { id: 'explorer', label: 'Nomadic Explorer', src: '/explorer.png' }
  ];

  return (
    <>
      <h2 className={styles.stepTitle}>Aesthetic Alignment</h2>
      <p className={styles.stepDescription}>Select the visual lifestyle that most accurately represents the legacy you want to secure.</p>
      
      <div className={styles.aestheticGrid}>
        {aesthetics.map(item => (
          <div 
            key={item.id}
            className={`${styles.aestheticCard} ${data.vibe === item.id ? styles.active : ''}`}
            onClick={() => updateData({ vibe: item.id })}
          >
            <div className={styles.imageWrapper}>
              <Image src={item.src} alt={item.label} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aestheticLabel}>{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
