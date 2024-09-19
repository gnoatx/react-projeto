import './styles/global.css'
import styles from './styles/App.module.css'
import { Activity } from "./components/Activity"

// import strava from 'strava-v3'

// strava.config({
//   "access_token": "6eb6ca5c32c94d6cf8cb9dc4f6809cd90d77f143",
//   "client_id": "135024",
//   "client_secret": "7320adfa052a7583e20e246ac8c45ed5a6b96bb6",
//   "redirect_uri" : "callback",
// })

// Atleta em

// strava.athlete.get(args, done)
// strava.athlete.update(args, done)// apenas 'peso' pode ser atualizado.
// strava.athlete.listActivities(args, done) Obtenha uma lista de resumos de atividades
// strava.athlete.listRoutes(args, done)


// Atletas em

// strava.athletes.get(args, done) Obter uma única atividade.args.id é necessário
// strava.athletes.stats(args, done)

// Actividades

// strava.activities.get(args, done)
// strava.activities.create(args, done)
// strava.activities.update(args, done)

function App() {

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

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Fitness Tracker</h1>
        <Activity exercise="walk" data={walkData} />
        <Activity exercise="bike" data={bikeData} />
        <Activity exercise="run" data={runData} />
        <Activity exercise="weightlifting" data={weightliftingData} />
      </div>
      <div className={styles.background}></div>
    </>
  )
}

export default App
