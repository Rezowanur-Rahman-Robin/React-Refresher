import React from 'react';
import './GoalList.css';


function GoalList(props) {
    return (
        <ul className="goal-list">
         {props.goals.map((item)=>{
               return <li key={item.id}>{item.title}</li>
         })}
            
        </ul>
    )
}

export default GoalList
