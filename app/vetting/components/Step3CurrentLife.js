export default function Step3CurrentLife({ data, updateData, styles }) {
  return (
    <>
      <h2 className={styles.stepTitle}>Current Trajectory</h2>
      <p className={styles.stepDescription}>Where are you now, and where are you going?</p>
      
      <div className={styles.inputGroup}>
        <label>Previous Marriages</label>
        <select value={data.previousMarriages} onChange={(e) => updateData({previousMarriages: parseInt(e.target.value)})}>
          <option value="0">None</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three or more</option>
        </select>
      </div>
      
      <div className={styles.inputGroup}>
        <label>Current Children</label>
        <select value={data.currentChildren} onChange={(e) => updateData({currentChildren: parseInt(e.target.value)})}>
          <option value="0">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Desire for Future Children</label>
        <select value={data.futureChildrenDesired ? 'yes' : 'no'} onChange={(e) => updateData({futureChildrenDesired: e.target.value === 'yes'})}>
          <option value="yes">Yes, I want children / more children</option>
          <option value="no">No, I do not want children / more children</option>
        </select>
      </div>
    </>
  );
}
