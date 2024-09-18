import { PersonSimple, PersonSimpleWalk, PersonSimpleRun, PersonSimpleBike, PersonSimpleSwim, Barbell, Volleyball } from "@phosphor-icons/react"
import Chart from "react-apexcharts"

export function Activity({exercise}) {
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
      type: 'line'
    },
    xaxis: {
      type: 'numeric',
      categories: daysOfMonth
    },
    stroke: {
      show: true,
      curve: 'smooth',
      colors: color,
      lineCap: 'round'
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

  const series = [{
    name: 'Minutos praticados',
    data: [1, 5, 10, 15, 0, 27, 38, 0, 1, 49, 2]
  }]

  return (
      <div>
        {currentExercise.icon}
        <span>{currentExercise.name}</span>
        <Chart
          options={options}
          series={series}
          width="500"
          height="200"
        />
        <button>+</button>
      </div>
  )
}