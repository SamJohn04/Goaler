import './App.css';
import Dash from './components/Dash';
import TaskCard from './components/TaskCard';
import React from 'react';
import { useSelector } from 'react-redux';
import NewTask from './pages/NewTask';

function App() {
  const n = useSelector((state) => state.tasks.taskCount)
  const taskCards = []
  for(let i = 0; i < n; i++) {
    taskCards.push(<TaskCard index = {i}/>)
  }
  return (
    <div className="App">
      {/* <Dash/>
      {taskCards} */}
      <NewTask/>
    </div>
  );
}

export default App;