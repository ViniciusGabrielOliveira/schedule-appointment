import { RootState } from '../../app/store';

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectStatusTasks = (state: RootState) => state.task.statusTasks;