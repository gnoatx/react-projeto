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

import { exercises, exercises2 } from "../../assets/exercises.jsx"
import styles from "./FavCard.module.css"
import { Star } from "@phosphor-icons/react"
import { useEffect, useState } from 'react'

export function FavCard({ exercise }) {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
  const [favorites, setFavorites] = useState(savedFavorites)
  let isFav

  // const currentExercise = exercises[exercise] || exercises.person;

  const currentExercise = exercises2.find((ex) => {
    return ex.id === exercise
  }) || exercises2[0]

  console.log(currentExercise)

  function toggleFavorite(ex) {
    let updatedFavorites;

    if (favorites.includes(ex)) {
      updatedFavorites = favorites.filter((item) => item !== ex)
    } else {
      updatedFavorites = [...favorites, ex];
    }

    setFavorites(updatedFavorites);
  }


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    isFav = favorites.includes(currentExercise) ? "fill" : "regular"
  }, [favorites])

  return (
    <div className={styles.card}>
      {currentExercise.icon}
      <span className={styles.exerciseName}>{currentExercise.name}</span>
      <button onClick={() => toggleFavorite(currentExercise)} className={styles.add}><Star size={32} weight={isFav}/></button>
    </div>
)
}