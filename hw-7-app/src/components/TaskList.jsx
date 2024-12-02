import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/tasksSlice";

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';


function TaskList() {
    const dispatch = useDispatch();
    const { tasks, status } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (status === "loading") {
        return <CircularProgress color="inherit" size={80} />;
    }

    if (status === "failed") {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Alert severity="error" action={
                    <Button color="primary" size="small" onClick={() => dispatch(fetchTasks())}>
                        Повторить
                    </Button>
                }>
                    Ошибка загрузки задач! Попробуйте снова.
                </Alert>
            </div>
        );;
    }

    return (
        <div className="task">
            <h3>Список задач</h3>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} style={{ opacity: task.completed ? 0.8 : 1 }}>
                        {task.completed ? <DoneIcon className="done" fontSize="large" /> : <CancelIcon className='not-done' fontSize="large" />} {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;