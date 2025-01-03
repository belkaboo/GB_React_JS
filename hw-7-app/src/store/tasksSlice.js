import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasksData from "../data/tasks";


export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                reject(new Error("Случайная ошибка загрузки!"));
            }
            else resolve(tasksData);
        }, 2000);
    });
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default tasksSlice.reducer;