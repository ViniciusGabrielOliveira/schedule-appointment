import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Task } from '../../app/models/task.model';
import { router } from '../../routerBrowser';
import { deleteTask, getTasks, postTask, putTask } from './taskService';

export interface TaskState
{
    tasks: Array<Task>;
    statusTasks: 'idle' | 'loading' | 'failed';
}

const initialState: TaskState = {
    tasks: [],
    statusTasks: 'idle'
};

export const postTaskAsync = createAsyncThunk(
    'tasks/post',
    async (task: Task) =>
    {
        const response = await postTask(task);
        router.navigate('/')
        return response.data;
    }
);

export const getTasksAsync = createAsyncThunk(
    'tasks',
    async () =>
    {
        const response = await getTasks();
        return response.data;
    }
);

export const putTaskAsync = createAsyncThunk(
    'tasks/put',
    async (task: Task) =>
    {
        const response = await putTask(task);
        return response.data;
    }
);

export const deleteTaskAsync = createAsyncThunk(
    'tasks/delete',
    async (id: string) =>
    {
        const response = await deleteTask(id);
        return response.data;
    }
);

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
    {
        builder
            .addCase(postTaskAsync.pending, (state) =>
            {
                state.statusTasks = 'loading';
            })
            .addCase(postTaskAsync.fulfilled, (state, action) =>
            {
                state.statusTasks = 'idle';
                state.tasks = action.payload;
            })
            .addCase(postTaskAsync.rejected, (state) =>
            {
                state.statusTasks = 'failed';
            })
            .addCase(getTasksAsync.pending, (state) =>
            {
                state.statusTasks = 'loading';
            })
            .addCase(getTasksAsync.fulfilled, (state, action) =>
            {
                state.statusTasks = 'idle';
                state.tasks = action.payload;
            })
            .addCase(getTasksAsync.rejected, (state) =>
            {
                state.statusTasks = 'failed';
            })
            .addCase(putTaskAsync.pending, (state) =>
            {
                state.statusTasks = 'loading';
            })
            .addCase(putTaskAsync.fulfilled, (state, action) =>
            {
                state.statusTasks = 'idle';
                state.tasks = action.payload;
            })
            .addCase(putTaskAsync.rejected, (state) =>
            {
                state.statusTasks = 'failed';
            })
            .addCase(deleteTaskAsync.pending, (state) =>
            {
                state.statusTasks = 'loading';
            })
            .addCase(deleteTaskAsync.fulfilled, (state, action) =>
            {
                state.statusTasks = 'idle';
                state.tasks = action.payload;
            })
            .addCase(deleteTaskAsync.rejected, (state) =>
            {
                state.statusTasks = 'failed';
            })
    },
});

export default taskSlice.reducer;
