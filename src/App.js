import React from 'react';
import { useState } from 'react';
import './App.css';
import Add_Button from './icons/I_Add.js';
import Check_Button from './icons/I_Check.js';
import Delete_Button from './icons/I_Delete.js';



function App() {
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [error, setError] = useState('');
  const [notification, setNotification] = useState({ visible: false, message: '', color: ''});
  const [popup, setPopup] = useState({ visible: false, taskIndex: null });

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  // Add task function
  const handleAdd = () => {
    if (tasks.includes(inputTask)) {
      setError('The name already exists');
    }
    else if (inputTask.length > 0 && inputTask.length < 256) {
      setTasks([inputTask, ...tasks]);
      showNotification('New task added', '#4caf50');
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

  // Mark done task function
  const handleDone = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    const taskToMove = tasks[index];
    setTasks(newTasks);
    setDoneTasks([taskToMove, ...doneTasks]);
  };

  // Delete task and confirm functions
  const handleDelete = (index) => {
    setPopup({ visible: true, taskIndex: index });
  };
  const confirmDelete = () => {
    const newTasks = tasks.filter((_, i) => i !== popup.taskIndex);
    setTasks(newTasks);
    showNotification('Task deleted successfully', '#f44336');
    setPopup({ visible: false, taskIndex: null });
  };
  const cancelDelete = () => {
    setPopup({ visible: false, taskIndex: null });
  };


  // Notificate function
  const showNotification = (message, color) => {
    setNotification({ visible: true, message, color});
    setTimeout(() => {
      setNotification({ visible: false, message: '', color: ''});
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
          <Add_Button onClick={handleAdd}/>
        </div>
        <p className="error-message">
          {error}
        </p>        

        {notification.visible && <div className="notification-message" style={{ backgroundColor : notification.color }}>{notification.message}</div>}

        <h2 className="task-header">
          Tasks to do - {tasks.length}
        </h2>
        <div className="task-list">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <section className="task-box" key={index}>
                <p className="task-text">
                  {task}
                </p>
                <div className="button-container">
                  <Check_Button onClick={() => handleDone(index)} iconSize='20px' />
                  <Delete_Button onClick={() => handleDelete(index)} iconSize='18px' />
                </div>
              </section>
            ))
          ) : (
            <div style={{textAlign: 'center', marginTop: '125px', marginLeft: '45px' }}>
              No data
            </div>
          )}
        </div>
        <h3 className="task-header" style={{ marginTop: '50px' }}>
          Done - {doneTasks.length}
        </h3>
        <div className="task-list" style={{ height: '70px' }}>
          {doneTasks.length > 0 ? (
            doneTasks.map((task, index) => (
              <section className="task-box" key={index}>
                <p className="task-text" style={{ maxWidth: '270px', color: '#72c3a7', textDecoration: 'line-through' }}>
                  {task}
                </p>
              </section>
            ))
          ) : (
            <div style={{textAlign: 'center', marginTop: '25px', marginLeft: '45px' }}>
              No data
            </div>
          )}
        </div>
        {popup.visible && (
          <div className="popup">
            <div className="popup-content">
              <p>Are you sure you want to delete this task?</p>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
