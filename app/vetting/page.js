'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Step1Cultural from './components/Step1Cultural';
import Step2Sociological from './components/Step2Sociological';
import Step3CurrentLife from './components/Step3CurrentLife';
import Step4Psychological from './components/Step4Psychological';
import 'flag-icons/css/flag-icons.min.css';

export default function VettingEngine() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [complete, setComplete] = useState(false);

  const [payload, setPayload] = useState({
    culturalRoots: { countryCode: '', flag: '' },
    sociological: { upbringingEnv: '', parentsMaritalStatus: '', religion: '', familyStructure: '' },
    currentLife: { previousMarriages: 0, currentChildren: 0, futureChildrenDesired: false, lifestyle: '' },
    psychological: { attachmentStyle: '', loveLanguage: '', conflictArchetype: '' }
  });

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(v => v + 1);
    else handleComplete();
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(v => v - 1);
  };

  const handleComplete = () => {
    console.log("Vetting Payload Generated:", JSON.stringify(payload, null, 2));
    setComplete(true);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1: return <Step1Cultural data={payload.culturalRoots} updateData={(d) => setPayload({...payload, culturalRoots: {...payload.culturalRoots, ...d}})} styles={styles} />;
      case 2: return <Step2Sociological data={payload.sociological} updateData={(d) => setPayload({...payload, sociological: {...payload.sociological, ...d}})} styles={styles} />;
      case 3: return <Step3CurrentLife data={payload.currentLife} updateData={(d) => setPayload({...payload, currentLife: {...payload.currentLife, ...d}})} styles={styles} />;
      case 4: return <Step4Psychological data={payload.psychological} updateData={(d) => setPayload({...payload, psychological: {...payload.psychological, ...d}})} styles={styles} />;
      default: return null;
    }
  };

  if (complete) {
    return (
      <div className={styles.container}>
        <div className={`${styles.card} glass-panel`} style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--cove-accent)', fontSize: '2rem', marginBottom: '1rem' }}>Protocol Complete</h1>
          <p>Your psychological and sociological profile has been fully vetted. Our engine is now calculating your matches.</p>
          <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(230, 237, 217, 0.5)' }}>Payload output successfully logged to console.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.card} glass-panel`}>
        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
          <div className={styles.progressText}>Step {currentStep} of {totalSteps}</div>
        </div>

        <div className={styles.stepContent}>
          {renderStep()}
        </div>

        <div className={styles.controls}>
          <button className="btn-outline" onClick={handleBack} disabled={currentStep === 1} style={{ opacity: currentStep === 1 ? 0.3 : 1 }}>
            Back
          </button>
          <button className="btn-primary" onClick={handleNext}>
            {currentStep === totalSteps ? 'Finalize Protocol' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
}
