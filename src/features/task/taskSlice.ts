import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Task } from '../../app/models/task.model';
import { router } from '../../routerBrowser';
import { deleteTask, getTaskById, getTasks, postTask, putTask } from './taskService';

export interface TaskState
{
    tasks: Array<Task>;
    statusTasks: 'idle' | 'loading' | 'failed';
    statusTask: 'idle' | 'loading' | 'failed';
    task?: Task;
}

const initialState: TaskState = {
    tasks: [],
    statusTasks: 'idle',
    statusTask: 'idle'
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

export const getTaskByIdAsync = createAsyncThunk(
    'task by id',
    async (id: string) =>
    {
        const response = await getTaskById(id);
        return response?.data;
    }
);

export const putTaskAsync = createAsyncThunk(
    'tasks/put',
    async (task: Task) =>
    {
        const response = await putTask(task);
        router.navigate('/')
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
            .addCase(getTaskByIdAsync.pending, (state) =>
            {
                state.statusTask = 'loading';
            })
            .addCase(getTaskByIdAsync.fulfilled, (state, action) =>
            {
                state.statusTask = 'idle';
                state.task = action.payload;
            })
            .addCase(getTaskByIdAsync.rejected, (state) =>
            {
                state.statusTask = 'failed';
            })
    },
});

export default taskSlice.reducer;
