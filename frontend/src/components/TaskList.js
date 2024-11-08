import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
    return (
        <div>
            <ul className="list-group">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onToggleComplete={onToggleComplete} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

