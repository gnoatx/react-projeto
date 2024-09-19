import styles from "./home.module.css"

export function Home(){
   
    return(
        <div className={styles.home}>
           <nav className={styles.navBar}>
            <li>
                <a href="#">Corrida</a>
                 <a href="#">Caminhada</a>
                 <a href="#">Ciclismo</a>
            </li>
           </nav>

        </div>
    )
}