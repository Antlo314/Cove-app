'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import Step1Cultural from './components/Step1Cultural';
import Step2Sociological from './components/Step2Sociological';
import Step3CurrentLife from './components/Step3CurrentLife';
import Step4Psychological from './components/Step4Psychological';
import AlgorithmicMirror from './components/AlgorithmicMirror';
import VelvetRope from './components/VelvetRope';
import 'flag-icons/css/flag-icons.min.css';

export default function VettingEngine() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [showMirror, setShowMirror] = useState(false);
  const [underReview, setUnderReview] = useState(false);

  const [payload, setPayload] = useState({
    culturalRoots: { countryCode: '', flag: '' },
    sociological: { upbringingEnv: '', parentsMaritalStatus: '', religion: '', familyStructure: '' },
    currentLife: { previousMarriages: 0, currentChildren: 0, futureChildrenDesired: false, lifestyle: '' },
    psychological: { attachmentStyle: '', loveLanguage: '', conflictArchetype: '' }
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
        setCurrentStep(v => v + 1);
    } else {
        console.log("Vetting Payload Generated:", JSON.stringify(payload, null, 2));
        setShowMirror(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(v => v - 1);
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

  // Variants for Framer Motion sliding transitions
  const variants = {
    initial: (direction) => {
      return { x: direction > 0 ? 50 : -50, opacity: 0 };
    },
    animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: (direction) => {
      return { x: direction < 0 ? 50 : -50, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } };
    }
  };

  if (underReview) {
    return (
      <div className={styles.container}>
        <div className={`${styles.card} glass-panel`}>
          <VelvetRope styles={styles} />
        </div>
      </div>
    );
  }

  if (showMirror) {
    return (
      <div className={styles.container}>
        <div className={`${styles.card} glass-panel`}>
          <AlgorithmicMirror payload={payload} setReviewState={setUnderReview} styles={styles} />
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

        <div className={styles.stepContent} style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentStep}
              custom={1}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ position: 'absolute', width: '100%' }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.controls}>
          <button className="btn-outline" onClick={handleBack} disabled={currentStep === 1} style={{ opacity: currentStep === 1 ? 0.3 : 1 }}>
            Back
          </button>
          <button className="btn-primary" onClick={handleNext}>
            {currentStep === totalSteps ? 'Run Protocol' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
}
