import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() && dueDate) {
            onAddTask(taskName, dueDate);
            setTaskName('');
            setDueDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="row g-2 align-items-center">
                <div className="col-md-8">
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter a new task"
                        className="form-control border border-primary"
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="col-md-1">
                    <button type="submit" className="btn btn-primary w-100">Add</button>
                </div>
            </div>
        </form>
    );
};

export default TaskForm;

