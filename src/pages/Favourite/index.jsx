import { FavCard } from "../../components/FavCard"
import style from './Favourite.module.css'

export function Favourite() {
  return (
    <div>
      <button onClick={() => localStorage.clear()}>Limpar localStorage</button>
      <ul className={style.list}>
        <li><FavCard exercise="walk" /></li>
        <li><FavCard exercise="run" /></li>
        <li><FavCard exercise="bike" /></li>
        <li><FavCard exercise="swim" /></li>
        <li><FavCard exercise="weightlifting" /></li>
        <li><FavCard exercise="volleyball" /></li>
        <li><FavCard exercise="baseball" /></li>
        <li><FavCard exercise="basketball" /></li>
        <li><FavCard exercise="boxing" /></li>
        <li><FavCard exercise="soccer" /></li>
      </ul>
    </div>
  )
}