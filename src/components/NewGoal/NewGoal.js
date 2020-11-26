import React,{useState} from 'react';
import "./NewGoal.css";

function NewGoal(props) {

    const [userInput, setInputText]=useState('');

    const addGoalHandler = (event) =>{
        event.preventDefault();

        const newGoal ={
            id: Math.random().toString(),
            title: userInput
        };

        props.onAddGoal(newGoal);
        setInputText('');
    };

    const textChangeHandler =(event)=>{
        setInputText(event.target.value) ;
    };

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={userInput} onChange={textChangeHandler} />
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default NewGoal
