import '../../styles/global.css'
import styles from './Home.module.css'
import { Activity } from "../../components/Activity"
import { ActivityHistory } from '../../components/History'
import { Calendar } from '../../components/Calendar'
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import {ActivityFitness} from '../../components/SaveActivity/ActivityFitness'
import { useState } from 'react'

export function Home() {
  const bgColor ="#171717"

  const walkData = [{
    data: [12, 45, 78, 3, 90, 56, 23, 115, 67, 34, 87, 6, 102, 39, 75, 19, 54, 110, 28, 81, 49, 92, 37, 8, 64, 99, 22, 48, 70]
  }]

  const bikeData = [{
    data: [5, 73, 14, 92, 38, 61, 27, 88, 41, 110, 8, 54, 33, 97, 20, 79, 66, 12, 47, 115, 30, 85, 9, 99, 25, 77, 68, 100, 3]
  }]

  const weightliftingData = [{
    data: [0, 0, 3, 0, 25, 0, 47, 0, 56, 10, 0, 12, 0, 75, 0, 88, 0, 99, 20, 0, 33, 0, 40, 0, 62, 0, 8, 0, 57]
  }]

  const runData = [{
    data: [29, 86, 14, 72, 40, 95, 23, 11, 67, 54, 90, 36, 100, 5, 82, 43, 61, 7, 116, 26, 74, 32, 58, 99, 21, 48, 13, 89, 39]
  }]

  const [step, setStep] = useState(1)

  function handleNextStep() {
    if (step === 3) {
      return setStep(1)
    }

    setStep((prevState) => prevState + 1)
  }

  function handlePreviousStep() {
    if (step === 1) {
      return setStep(3)
    }

    setStep((prevState) => prevState - 1)
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Fitness Tracker</h1>

        {step === 1 && (
          <div className={styles.stepContainer}>
            <h1 className={styles.title}>Exercícios</h1>
            <Activity exercise="walk" data={walkData} />
            <Activity exercise="bike" data={bikeData} />
            <Activity exercise="run" data={runData} />
            <Activity exercise="weightlifting" data={weightliftingData} />
          </div>
        )}

        {step === 2 && (
            <div className={styles.stepContainer}>
                <h1 className={styles.title}>Histórico de Atividades</h1>
                <ActivityHistory categoria="corrida" duration="45 min" distance={10} calories={300} />
                <ActivityHistory categoria="caminhada" duration="30 min" distance={5} calories={200} />
            </div>
        )}


        {step === 3 && (
            <div className={styles.stepContainer}>
                <Calendar />
            </div>
        )}

        <div className={styles.stepNav}>
          <button className={styles.stepButton} onClick={handlePreviousStep}><CaretLeft size={32} weight="bold" color={bgColor} /></button>
          <button className={styles.stepButton} onClick={handleNextStep}><CaretRight size={32} weight="bold" color={bgColor} /></button>
        </div>
      </div>
     <ActivityFitness/>
     {/* <ExerciseTracker/> */}

    </>
  )
}