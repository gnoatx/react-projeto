import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import styles from './historico.module.css'
const ActivityHistory = ({ duration, distance, calories }) => {
    return (
        <div className={styles.geral}>    
            <FontAwesomeIcon icon={faHistory} className={styles.icon} />        
            <div className={styles.dataContainer}>
                <p>Duração: {duration}</p>
                <p>Distância: {distance} km</p>
                <p>Calorias: {calories} kcal</p>
            </div>
        </div>
    );
};



export default ActivityHistory;
