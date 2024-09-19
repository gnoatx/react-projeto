import { PersonSimple, PersonSimpleWalk, PersonSimpleRun, PersonSimpleBike, PersonSimpleSwim, Barbell, Volleyball } from "@phosphor-icons/react"
import Chart from "react-apexcharts"
import styles from './Activity.module.css'

export function Activity({exercise, data}) {
  let color = "#e6533d"
  const exercises = {
    "person": {
      name: "Inativo",
      icon: <PersonSimple size={48} color={color} />
    },
    "walk": {
      name: "Caminhada",
      icon: <PersonSimpleWalk size={48} color={color} />
    },
    "run": {
      name: "Corrida",
      icon: <PersonSimpleRun size={48} color={color} />
    },
    "bike": {
      name: "Ciclismo",
      icon: <PersonSimpleBike size={48} color={color} />
    },
    "swim": {
      name: "Natação",
      icon: <PersonSimpleSwim size={48} color={color} />
    },
    "weightlifting": {
      name: "Levantamento",
      icon: <Barbell size={48} color={color} />
    },
    "volleyball": {
      name: "Vôlei",
      icon: <Volleyball size={48} color={color} />
    }
  }

  const currentExercise = exercises[exercise] || exercises.person

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
        {currentExercise.icon}
        <span className={styles.exerciseName}>{currentExercise.name}</span>
        <Chart
          width="300px"
          height="100px"
          options={options}
          series={data}
        />
        <button className={styles.add}>+</button>
      </div>
  )
}