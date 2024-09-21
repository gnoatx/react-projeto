import { color, exercises } from "../../assets/exercises.jsx"
import styles from "./FavCard.module.css"
import { Star } from "@phosphor-icons/react"
import React, {useState} from 'react'

function toggleFavorite(ex) {
  let updatedFavorites;

  const [favorites, setFavorites] = useState([])

  if (favorites.includes(ex)) {
      
      updatedFavorites = favorites.filter(fav => fav !== ex);
  } else {
     
      updatedFavorites = [...favorites, ex];
  }

  setFavorites(updatedFavorites);

 
  localStorage.setItem(favorites, JSON.stringify(updatedFavorites));
}

export function FavCard({exercise}) {
  const currentExercise = exercises[exercise] || exercises.person

  return (
    <div className={styles.card}>
      {currentExercise.icon}
      <span className={styles.exerciseName}>{currentExercise.name}</span>
      <button onClick={toggleFavorite(currentExercise)} className={styles.add}><Star size={32} /></button>
    </div>
)
}