import { PersonSimple, PersonSimpleWalk, PersonSimpleRun, PersonSimpleBike, PersonSimpleSwim, Barbell, Volleyball } from "@phosphor-icons/react"
import React from "react"
import { Line } from "react-chartjs-2"

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

  const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    datasets: [
      {
        label: "Teste",
        data: [5, 10, 25, 1, 3, 0, 0, 5 ],
        fill: false,
        borderColor: {color}
      }
    ]
  }

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };

  return (
    <>
      <div>
        {currentExercise.icon}
        <span>{currentExercise.name}</span>
        <button>+</button>
      </div>
      <div><Line data={data} options={config} /></div>
    </>
  )
}