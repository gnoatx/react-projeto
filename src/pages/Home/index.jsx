import '../../styles/global.css'
import styles from './Home.module.css'
import { Activity } from "../../components/Activity"
import { ActivityHistory } from '../../components/History'
import { Calendar } from '../../components/Calendar'
import { CaretLeft, CaretRight, GearSix } from "@phosphor-icons/react"
import {ActivityFitness} from '../../components/SaveActivity/ActivityFitness'
import { useState } from 'react'

export function Home() {
  const bgColor ="#171717"

  const favoriteExercises = JSON.parse(localStorage.getItem("favorites")) || []

  const chartData = {
    "walk": [{
        "data": [0, 30, 15, 60, 22, 0, 35, 40, 10, 55, 0, 70, 25, 0, 12, 0, 45, 15, 0, 80, 18, 53, 20, 0, 7, 0, 40, 33, 5]
    }],
    "run": [{
        "data": [20, 0, 12, 45, 0, 50, 5, 0, 10, 40, 25, 55, 0, 62, 30, 70, 15, 0, 0, 75, 5, 50, 14, 90, 0, 35, 29, 60, 8]
    }],
    "bike": [{
        "data": [0, 0, 20, 0, 15, 40, 30, 70, 0, 90, 10, 45, 25, 60, 35, 0, 5, 55, 0, 80, 22, 0, 15, 67, 0, 40, 33, 75, 10]
    }],
    "swim": [{
        "data": [0, 30, 20, 0, 25, 35, 0, 60, 10, 0, 5, 55, 0, 70, 15, 0, 40, 0, 18, 90, 0, 65, 8, 70, 0, 15, 10, 0, 5]
    }],
    "weightlifting": [{
        "data": [30, 0, 0, 60, 20, 35, 0, 50, 10, 70, 0, 55, 0, 80, 0, 0, 5, 90, 18, 0, 25, 75, 10, 0, 12, 0, 0, 60, 8]
    }],
    "volleyball": [{
        "data": [15, 40, 0, 0, 30, 0, 20, 60, 10, 45, 5, 75, 18, 0, 12, 80, 0, 0, 15, 90, 0, 55, 0, 70, 28, 0, 10, 0, 3]
    }],
    "baseball": [{
        "data": [10, 0, 20, 55, 30, 0, 15, 60, 5, 0, 25, 0, 20, 45, 10, 70, 30, 0, 12, 75, 8, 90, 22, 55, 0, 0, 18, 40, 7]
    }],
    "basketball": [{
        "data": [0, 50, 15, 40, 30, 0, 10, 60, 25, 0, 12, 70, 8, 0, 0, 55, 22, 0, 10, 0, 5, 75, 30, 85, 15, 40, 0, 100, 3]
    }],
    "boxing": [{
        "data": [25, 55, 20, 30, 0, 45, 10, 60, 5, 90, 0, 0, 35, 50, 0, 70, 12, 0, 18, 65, 20, 80, 15, 0, 0, 85, 2, 0, 6]
    }],
    "soccer": [{
        "data": [30, 0, 20, 60, 0, 55, 10, 70, 0, 80, 5, 0, 12, 90, 0, 50, 22, 0, 8, 75, 10, 85, 3, 55, 30, 40, 0, 70, 4]
    }]
  }

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
        <a href="/favs" className={styles.options}><GearSix size={48} /></a>

        {step === 1 && (
          <div className={styles.stepContainer}>
            <h1 className={styles.title}>Exercícios</h1>
              {favoriteExercises.map((ex) => (
                  <Activity id={ex.id} data={chartData[ex.id]} key={ex.id} />
              ))}
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
     {/* <ActivityFitness/> */}
     {/* <ExerciseTracker/> */}

    </>
  )
}
