import './TodoList.css';
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // const addTask = () => {
    //     if (newTask.trim()) {
    //         setTasks([...tasks, newTask.trim()]);
    //         setNewTask('');
    //     }
    // };

    const addTask = () => {
        if (newTask.trim()) {
            const task = {
                id: Date.now(),
                text: newTask.trim(),
            }
            setTasks([...tasks, task]);
            setNewTask('');
        }
    }


    // const deleteTask = (index) => {
    //     const updatedTasks = tasks.filter((_, i) => i !== index);
    //     setTasks(updatedTasks);
    // };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }



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
                {tasks.map((task) => (
                    <ListItem
                        className='list-item'
                        key={task.id}
                    >
                        <ListItemText primary={task.text} />
                        <IconButton
                            color="error"
                            onClick={() => deleteTask(task.id)}
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

