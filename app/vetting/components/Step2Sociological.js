export default function Step2Sociological({ data, updateData, styles }) {
  return (
    <>
      <h2 className={styles.stepTitle}>Upbringing & Background</h2>
      <p className={styles.stepDescription}>Understanding your foundation helps predict relationship architecture.</p>
      
      <div className={styles.inputGroup}>
        <label>Parents' Marital Status During Childhood</label>
        <select value={data.parentsMaritalStatus} onChange={(e) => updateData({parentsMaritalStatus: e.target.value})}>
          <option value="">Select status</option>
          <option value="married_together">Married & Together</option>
          <option value="divorced">Divorced / Separated</option>
          <option value="single_parent">Single Parent Household</option>
          <option value="other">Other / Extended Family</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Religious / Spiritual Background</label>
        <select value={data.religion} onChange={(e) => updateData({religion: e.target.value})}>
          <option value="">Select primary influence</option>
          <option value="christianity">Christianity (Protestant/Catholic)</option>
          <option value="islam">Islam</option>
          <option value="hinduism">Hinduism</option>
          <option value="spiritual">Spiritual but not religious</option>
          <option value="secular">Atheist / Agnostic / Secular</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className={styles.inputGroup}>
        <label>Primary Childhood Environment</label>
        <select value={data.upbringingEnv} onChange={(e) => updateData({upbringingEnv: e.target.value})}>
          <option value="">Select environment</option>
          <option value="urban_city">Urban / Inner City</option>
          <option value="suburban">Suburban</option>
          <option value="rural">Rural / Countryside</option>
          <option value="island_local">Caribbean Island Native</option>
        </select>
      </div>
    </>
  );
}
