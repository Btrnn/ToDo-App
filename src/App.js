import React from 'react';
import { useState } from 'react';
import './App.css';
import addIcon from './image/I_Add.png';
import doneIcon from './image/I_Done.png';
import deleteIcon from './image/I_Delete.png';


function App() {
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [error, setError] = useState('');
  const [popup, setPopup] = useState({ visible: false, message: '', color: ''});

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleAdd = () => {
    if (tasks.includes(inputTask)) {
      setError('The name already exists');
    }
    else if (inputTask.length > 0 && inputTask.length < 256) {
      setTasks([inputTask, ...tasks]);
      showPopup('Task added successfully', '#4caf50');
      setInputTask('');
      setError('')
    }
    else if(inputTask.length > 255){
      setError('Name is too long, max length is 255 characters');
      setInputTask('');
    } 
    else {
      setError('This field is required');
      setInputTask('');
    }
  };

  const handleDone = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    const taskToMove = tasks[index];
    setTasks(newTasks);
    setDoneTasks([taskToMove, ...doneTasks]);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    showPopup('Task deleted successfully', '#f44336');
  };

  const showPopup = (message, color) => {
    setPopup({ visible: true, message, color});
    setTimeout(() => {
      setPopup({ visible: false, message: '', color: ''});
    }, 2500); 
  };


  return (
    <div className="App">
      <section className="section">
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Add a new task"
            value={inputTask}
            onChange={handleInputChange}
            maxLength="256"
          />
          <button className="button-add" onClick={handleAdd}>
            <img src={addIcon} alt="Add"/>
          </button>
        </div>
        <p className="error-message">
          {error}
        </p>        

        {popup.visible && <div className="popup-message" style={{ backgroundColor : popup.color }}>{popup.message}</div>}

        <h2 className="task-header">
          Task To Do - {tasks.length}
        </h2>
        <div className="task-list">
          {tasks.map((task, index) => (
            <section className="task-box" key={index}>
              <p className="task-text">
                {task}
              </p>
              <div>
                <button className="button" onClick={() => handleDone(index)}>
                  <img src={doneIcon} alt="Done" />
                </button>
                <button className="button" style={{ marginRight: '5px' }} onClick={() => handleDelete(index)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </section>
          ))}
        </div>
        <h3 className="task-header" style={{ marginTop: '25px' }}>
          Done - {doneTasks.length}
        </h3>
        <div className="task-list" style={{ height: '70px' }}>
          {doneTasks.map((task, index) => (
            <section className="task-box" key={index}>
              <p className="task-text" style={{ maxWidth: '270px', color: '#72c3a7', textDecoration: 'line-through' }}>
                {task}
              </p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
