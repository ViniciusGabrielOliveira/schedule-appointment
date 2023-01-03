import { RootState } from '../../app/store';

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectStatusTasks = (state: RootState) => state.task.statusTasks;
export const selectStatusTask = (state: RootState) => state.task.statusTask;
export const selectTask = (state: RootState) => state.task.task;
