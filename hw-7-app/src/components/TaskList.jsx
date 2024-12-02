import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/tasksSlice";

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


function TaskList() {
    const dispatch = useDispatch();
    const { tasks, status } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (status === "loading") {
        return <CircularProgress />;
    }

    if (status === "failed") {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Alert severity="error">Ошибка загрузки задач! Попробуйте снова.</Alert>

            </div>
        );;
    }

    return (
        <div className="task">
            <h3>Список задач</h3>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} style={{ opacity: task.completed ? 0.5 : 1 }}>
                        {task.completed ? "✔️ " : "❌ "} {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;