// import { color, exercises } from "../../assets/exercises.jsx"
// import styles from "./FavCard.module.css"
// import { Star } from "@phosphor-icons/react"
// import React, {useState} from 'react'

// function toggleFavorite(ex) {
//   let updatedFavorites;

//   const [favorites, setFavorites] = useState([])

//   if (favorites.includes(ex)) {
      
//       updatedFavorites = favorites.filter(fav => fav !== ex);
//   } else {
     
//       updatedFavorites = [...favorites, ex];
//   }

//   setFavorites(updatedFavorites);

 
//   localStorage.setItem(favorites, JSON.stringify(updatedFavorites));
// }

import { exercises } from "../../assets/exercises.jsx"
import styles from "./FavCard.module.css"
import { Star } from "@phosphor-icons/react"
import { useEffect, useState } from 'react'

export function FavCard({ exercise }) {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
  const [favorites, setFavorites] = useState(savedFavorites)

  const currentExercise = exercises[exercise] || exercises.person;

  function toggleFavorite(ex) {
    let updatedFavorites;

    if (favorites.includes(ex)) {
      updatedFavorites = favorites.splice(favorites.indexOf(ex), 1)
    } else {
      updatedFavorites = [...favorites, ex];
    }

    setFavorites(updatedFavorites);
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <div className={styles.card}>
      {currentExercise.icon}
      <span className={styles.exerciseName}>{currentExercise.name}</span>
      <button onClick={() => toggleFavorite(currentExercise)} className={styles.add}><Star size={32} weight={favorites.includes(currentExercise) ? "fill" : "regular"}/></button>
    </div>
)
}