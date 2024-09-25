import { Plus } from "@phosphor-icons/react"
import Chart from "react-apexcharts"
import styles from './Activity.module.css'
import { color, exercises2 } from "../../assets/exercises.jsx"


export function Activity({id, data}) {

  const exercise = exercises2.find((e) => e.id === id)

  const lastDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate()
  const daysOfMonth = Array.from(
    {length: lastDayOfMonth},
    (_, i) => i + 1
  )

  const options = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'numeric',
      categories: daysOfMonth
    },
    yaxis: {
      seriesName: 'Minutos praticados'
    },
    stroke: {
      show: true,
      curve: 'smooth',
      colors: color,
      lineCap: 'round',
      width: 4
    },
    markers: {
      size: 0
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    }
  }

  return (
      <div className={styles.card}>
        {exercise.icon}
        <span className={styles.exerciseName}>{exercise.name}</span>
        <Chart
          width="300px"
          height="100px"
          options={options}
          series={data}
        />
        <button className={styles.add}><Plus size={32} weight="bold" /></button>
      </div>
  )
}

