import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center p-3 rounded ${task.completed ? 'bg-light text-muted' : ''}`}>
            <div className="d-flex align-items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="form-check-input me-2"
                />
                <div>
                    <span className={task.completed ? 'text-decoration-line-through' : ''}>
                        {task.name}
                    </span>
                    <small className="text-muted d-block">Due: {task.dueDate}</small>
                </div>
            </div>
            <button onClick={() => onDelete(task.id)} className="btn btn-outline-danger btn-sm">
                <FaTrash />
            </button>
        </li>
    );
};

export default TaskItem;


