import { Star } from "@phosphor-icons/react";

import styles from "./FavCard.module.css";

export function FavCard({ exercise, isFav, toggleFavorite }) {

  const iconWeightByProp = isFav ? "fill" : "regular";

  return (
    <div className={styles.card}>
      {exercise.icon}
      <span className={styles.exerciseName}>{exercise.name}</span>
      <button onClick={toggleFavorite} className={styles.add}>
        <Star size={32} weight={iconWeightByProp} />
      </button>
    </div>
  );
}