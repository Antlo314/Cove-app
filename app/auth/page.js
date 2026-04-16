'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock authentication
    setTimeout(() => {
      setLoading(false);
      router.push('/vetting'); // Route straight to vetting engine
    }, 1000);
  };

  return (
    <div className={styles.authContainer}>
      <div className={`${styles.authCard} glass-panel`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome</h1>
          <p className={styles.subtitle}>Initialize your protocol.</p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              className={styles.input} 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>PASSWORD</label>
            <input 
              type="password" 
              className={styles.input} 
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            {loading ? 'Authenticating...' : 'Enter Cove'}
          </button>
        </form>

        <div className={styles.divider}>OR CONTINUE WITH</div>

        <button className={styles.ssoButton} onClick={() => handleLogin({preventDefault: () => {}})}>
          Google Account
        </button>
      </div>
    </div>
  );
}
