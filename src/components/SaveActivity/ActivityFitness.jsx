 import React, {useState, useEffect} from 'react'


export const ActivityFitness = () =>{

    const [activities, setActivities] = useState ([])
    const [activity, setActivity] = useState('')
 
   useEffect(()=>{
    const savedActivities = JSON.parse(localStorage.getItem(activities)) || []
    setActivities(savedActivities)   
},[])
    
    const addActivity = () =>{
        const newActivities = [...activities, activity]
        setActivities(newActivities)
        setActivity('')

        localStorage.setItem(activities, JSON.stringify(newActivities))
    }
 
        const deleteActivity = (indexToDelete) =>{
        const updatedActivities = activities.filter((_, index) => index !==indexToDelete)
        setActivities(updatedActivities)

        localStorage.setItem(activities, JSON.stringify(updatedActivities))
        } 

        

    return(<>
    <div>
        <h1>Atividades salvas</h1>
        <input 
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder='Digite a atividade'
        />
        <button onClick={addActivity}> Adicionar </button>
        <h2>Atividades</h2>
        <ul>
           {activities.map((act, index) =>(
            <li key={index}>
                {act}
                <button onClick={()=> deleteActivity(index)}>Deletar</button>
                </li>
           ))}

        </ul>
    </div>
    </>)
}

