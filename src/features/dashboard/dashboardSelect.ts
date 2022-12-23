import { RootState } from '../../app/store';

export const selectAmount = (state: RootState) => state.dashboard.amount;
export const selectStatusAmount = (state: RootState) => state.dashboard.statusAmount;
export const selectStatusDayCards = (state: RootState) => state.dashboard.statusDayCards;
export const selectDayCards = (state: RootState) => state.dashboard.dayCards;