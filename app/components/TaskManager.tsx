"use client";
import React, { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (indexToRemove: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div id="task-manager-component" className="card shadow-sm h-100 border-success" data-testid="task-manager-container">
      <div className="card-body">
        <h5 id="task-manager-title" data-testid="task-manager-title">Un TO DO bien GOOD</h5>
        
        <div className="input-group mb-3">
          <input 
            id="task-input"
            type="text" 
            className="form-control"
            data-testid="task-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write missing task from de ERP system here..."
          />
          <button 
            id="task-add-btn"
            className="btn btn-success"
            data-testid="task-add-btn"
            onClick={addTask}
          >
            add
          </button>
        </div>

        <ul id="task-list" className="list-group" data-testid="task-list">
          {tasks.map((task, index) => (
            <li 
              key={index} 
              id={`task-item-${index}`} 
              className="list-group-item d-flex justify-content-between align-items-center"
              data-testid={`task-item-${index}`}
            >
              <span id={`task-text-${index}`} data-testid={`task-text-${index}`}>{task}</span>
              <button 
                id={`task-delete-btn-${index}`}
                className="btn btn-sm btn-danger"
                data-testid={`task-delete-btn-${index}`}
                onClick={() => deleteTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}