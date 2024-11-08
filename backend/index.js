// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001; // Or another available port

// Middleware
app.use(cors());
app.use(express.json());

// In-memory task list
let tasks = [];

// Root route
app.get('/', (req, res) => {
    res.send('Task Manager API is running');
});

// GET /tasks - Retrieve all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST /tasks - Add a new task
app.post('/tasks', (req, res) => {
    const { name, dueDate } = req.body;
    const newTask = { id: tasks.length + 1, name, dueDate, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Update a task
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { name, dueDate, completed } = req.body;
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.name = name !== undefined ? name : task.name;
        task.dueDate = dueDate !== undefined ? dueDate : task.dueDate;
        task.completed = completed !== undefined ? completed : task.completed;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// DELETE /tasks/:id - Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        res.json(deletedTask[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
