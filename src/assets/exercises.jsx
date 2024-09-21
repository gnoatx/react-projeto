import { PersonSimple, PersonSimpleWalk, PersonSimpleRun, PersonSimpleBike, PersonSimpleSwim, Barbell, Volleyball, Baseball, Basketball, BoxingGlove, SoccerBall } from "@phosphor-icons/react"

export const color = "#e6533d"
export const exercises = {
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
    },
    "baseball": {
      name: "Beisebol",
      icon: <Baseball size={48} color={color} />
    },
    "basketball": {
      name: "Basquete",
      icon: <Basketball size={48} color={color} />
    },
    "boxing": {
      name: "Boxe",
      icon: <BoxingGlove size={48} color={color}/>
    },
    "soccer": {
      name: "Futebol",
      icon: <SoccerBall size={48} color={color} />
    }
  }