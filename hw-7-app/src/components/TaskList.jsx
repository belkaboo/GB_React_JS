import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/tasksSlice";


function TaskList() {
    const dispatch = useDispatch();
    const { tasks, status } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (status === "loading") {
        return <p>Загрузка задач...</p>;
    }

    if (status === "failed") {
        return <p>Ошибка загрузки задач!</p>;
    }

    return (
        <div>
            <h2>Список задач</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;