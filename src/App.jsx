// import { useState } from 'react'
import './App.css'
import { Activity } from "./components/Activity"

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
  
  // const [count, setCount] = useState(0)

  return    
   
      <Activity exercise="walk" />
  
  
}

export default App
