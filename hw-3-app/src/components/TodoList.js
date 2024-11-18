import './TodoList.css';
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className='todo-container'>
            <h3>Список дел</h3>

            <TextField
                fullWidth
                label="Введите новую задачу"
                variant="outlined"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                multiline
            />


            <Button
                variant="contained"
                color='success'
                fullWidth
                onClick={addTask}
            >
                Добавить задачу
            </Button>


            <List>
                {tasks.map((task, index) => (
                    <ListItem
                        className='list-item'
                        key={index}
                    >
                        <ListItemText primary={task} />
                        <IconButton
                            color="error"
                            onClick={() => deleteTask(index)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TodoList;

