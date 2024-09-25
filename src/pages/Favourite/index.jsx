import { useState } from "react";
import { FavCard } from "../../components/FavCard";
import style from "./Favourite.module.css";
import { exercises2 } from "../../assets/exercises";
import { CaretLeft } from "@phosphor-icons/react"

export function Favourite() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

  function toggleFavorite(exercise) {
    const exerciseIsFavorite = favorites.find((e) => e.name === exercise.name);

    if (exerciseIsFavorite) {

      const filteredFavorites = favorites.filter(
        (item) => item !== exerciseIsFavorite
      );

      setFavorites(filteredFavorites);

      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));

      return;
    }

    const newFavorites = [...favorites, exercise];

    setFavorites(newFavorites);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  console.log("Favorites", favorites);

  return (
    <div>
      <a href="/" className={style.back}><CaretLeft size={48}/></a>
      <ul className={style.list}>
        {exercises2.map((exercise) => (
          <li key={exercise.id}>
            <FavCard
              exercise={exercise}
              toggleFavorite={() => toggleFavorite(exercise)}
              isFav={favorites.find((e) => e.name === exercise.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}