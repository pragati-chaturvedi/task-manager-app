import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);

  //fetching all tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  //Adding new task
  const handleAddTask = async (name, dueDate) => {
    try {
      const response = await axios.post(API_URL, { name, dueDate });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Deleting a task
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  //Updating a task
  const handleToggleComplete = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`${API_URL}/${taskId}`, updatedTask);
      setTasks(tasks.map(t => (t.id === taskId ? updatedTask : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  //Fetching tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container my-4">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Task Manager App</h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggleComplete={handleToggleComplete} />
      </div>
    </div>
  );
}

export default App;
