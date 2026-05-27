import { useState } from "react";
import styles from "./StepProgress.module.scss";

function StepProgress({ numberOfSteps = 4 }) {
  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((lastStatus) => lastStatus + 1);
  }
  function handlePrevStep() {
    setCurrentStep((lastStatus) => lastStatus - 1);
  }
  return (
    <>
      {currentStep === 0 ? (
        <button onClick={handleNextStep}>Start</button>
      ) : (
        <>
          <section className={styles["container"]}>
            {[...Array(numberOfSteps)].map((_, index) => {
              let indexOfEl = index + 1;
              const statusClass =
                indexOfEl <= currentStep ? styles.active : styles.inactive;
              return (
                <div className={`${styles.box} ${statusClass}`} key={index}>
                  {indexOfEl}
                </div>
              );
            })}
          </section>
          <section className="btn-container">
            <button disabled={currentStep === 1} onClick={handlePrevStep}>
              Previous
            </button>
            <button
              disabled={currentStep === numberOfSteps}
              onClick={handleNextStep}
            >
              Next
            </button>
          </section>
        </>
      )}
    </>
  );
}

export default StepProgress;
