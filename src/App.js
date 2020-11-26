import React,{useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {

  const [goals,setCourseGoals] = useState([
    {id:'id1',title:'This is the First Title.'},
    {id:'id2',title:'This is the Second Title.'},
    {id:'id3',title:'This is the Third Title.'},
    {id:'id4',title:'This is the Fourth Title.'}
  ]);



  const addNewHandler =(newGoal)=>{

       //setCourseGoals(goals.concat(newGoal));
       setCourseGoals((prevCourseGoals)=>{
         return prevCourseGoals.concat(newGoal);
       });


  };

  return (
    <div className="App">
     <h1>Hi, it's the heading.</h1>

     <NewGoal onAddGoal={addNewHandler} />
    <GoalList goals={goals} />
    </div>
  );
}

export default App;
