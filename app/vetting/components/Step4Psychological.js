export default function Step4Psychological({ data, updateData, styles }) {
  const attachmentStyles = [
    { id: 'secure', label: 'Secure', icon: '⚓', desc: 'Comfortable with intimacy and independence' },
    { id: 'anxious', label: 'Anxious', icon: '🫂', desc: 'Need high reassurance and closeness' },
    { id: 'avoidant', label: 'Avoidant', icon: '🏔️', desc: 'Highly independent, sometimes distant' },
    { id: 'fearful', label: 'Fearful-Avoidant', icon: '🌪️', desc: 'Desire intimacy but fear rejection' }
  ];

  return (
    <>
      <h2 className={styles.stepTitle}>Psychological Mapping</h2>
      <p className={styles.stepDescription}>This defines how you love and how you fight. Honesty here is paramount.</p>
      
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ fontSize: '0.85rem', color: 'var(--cove-accent)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', letterSpacing: '0.5px' }}>Primary Attachment Style</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) minmax(140px, 1fr)', gap: '1rem' }}>
          {attachmentStyles.map(style => (
            <div 
              key={style.id}
              className={`${styles.selectionCard} ${data.attachmentStyle === style.id ? styles.active : ''}`}
              onClick={() => updateData({ attachmentStyle: style.id })}
              style={{ padding: '1rem', textAlign: 'left', alignItems: 'flex-start' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{style.icon}</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--foreground)' }}>{style.label}</strong>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(230, 237, 217, 0.6)' }}>{style.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Primary Love Language</label>
        <select value={data.loveLanguage} onChange={(e) => updateData({loveLanguage: e.target.value})}>
          <option value="">Select your top love language</option>
          <option value="words">Words of Affirmation</option>
          <option value="acts">Acts of Service</option>
          <option value="gifts">Receiving Gifts</option>
          <option value="quality">Quality Time</option>
          <option value="touch">Physical Touch</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Conflict Resolution Archetype</label>
        <select value={data.conflictArchetype} onChange={(e) => updateData({conflictArchetype: e.target.value})}>
          <option value="">Select your typical reaction to high-stress conflict</option>
          <option value="collaborative">Collaborative (Seek win-win)</option>
          <option value="compromising">Compromising (Meet in the middle)</option>
          <option value="accommodating">Accommodating (Give in often)</option>
          <option value="avoiding">Avoiding (Withdraw / Ignore)</option>
          <option value="competing">Competing (Argue to win)</option>
        </select>
      </div>
    </>
  );
}
