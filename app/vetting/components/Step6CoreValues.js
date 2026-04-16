export default function Step6CoreValues({ data, updateData, styles }) {
  return (
    <>
      <h2 className={styles.stepTitle}>Core Dealbreakers</h2>
      <p className={styles.stepDescription}>The final step. These are the non-negotiables that break relationships over time.</p>
      
      <div className={styles.inputGroup}>
        <label>Financial Architecture</label>
        <select value={data.finances} onChange={(e) => updateData({finances: e.target.value})}>
          <option value="">Select financial philosophy</option>
          <option value="joint_complete">Complete Joint Accounts (100% Shared)</option>
          <option value="joint_proportional">Proportional Joint (Income Based)</option>
          <option value="separate_equal">Strictly Separate (50/50 Split)</option>
          <option value="provider">Traditional Provider Model</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Political & Worldview Alignment</label>
        <select value={data.worldview} onChange={(e) => updateData({worldview: e.target.value})}>
          <option value="">Select worldview</option>
          <option value="progressive">Highly Progressive</option>
          <option value="moderate_left">Moderate / Lean Left</option>
          <option value="centrist">Centrist / Independent</option>
          <option value="moderate_right">Moderate / Lean Right</option>
          <option value="conservative">Highly Conservative</option>
          <option value="apolitical">Apolitical / Non-participant</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Core Ethical Boundary</label>
        <select value={data.ethics} onChange={(e) => updateData({ethics: e.target.value})}>
          <option value="">What breaks your trust most?</option>
          <option value="financial_infidelity">Financial Infidelity (Hidden Debt/Assets)</option>
          <option value="physical_infidelity">Physical Infidelity</option>
          <option value="emotional_infidelity">Emotional Infidelity</option>
          <option value="disrespect_family">Disrespect to Extended Family</option>
        </select>
      </div>
    </>
  );
}
