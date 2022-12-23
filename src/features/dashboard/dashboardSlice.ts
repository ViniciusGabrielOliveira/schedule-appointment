import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DayCardModel } from '../../app/containers/components/day-card/Day-card';
import { getAmount, getDayCards } from './dashboardService';

export interface DashboardState
{
    amount: number;
    statusAmount: 'idle' | 'loading' | 'failed';
    statusDayCards: 'idle' | 'loading' | 'failed';
    dayCards: Array<DayCardModel>;
}

const initialState: DashboardState = {
    amount: 0,
    statusAmount: 'idle',
    statusDayCards: 'idle',
    dayCards: []
};

export const getAmountAsync = createAsyncThunk(
    'dashboard/amount',
    async () =>
    {
        const response = await getAmount();
        return response.data;
    }
);

export const getDayCardsAsync = createAsyncThunk(
    'dashboard/day-cards',
    async (day?: string) =>
    {
        const response = await getDayCards(day);
        return response.data;
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
    {
        builder
            .addCase(getAmountAsync.pending, (state) =>
            {
                state.statusAmount = 'loading';
            })
            .addCase(getAmountAsync.fulfilled, (state, action) =>
            {
                state.statusAmount = 'idle';
                state.amount = action.payload;
            })
            .addCase(getAmountAsync.rejected, (state) =>
            {
                state.statusAmount = 'failed';
            })
            .addCase(getDayCardsAsync.pending, (state) =>
            {
                state.statusDayCards = 'loading';
            })
            .addCase(getDayCardsAsync.fulfilled, (state, action) =>
            {
                state.statusDayCards = 'idle';
                state.dayCards = action.payload;
            })
            .addCase(getDayCardsAsync.rejected, (state) =>
            {
                state.statusDayCards = 'failed';
            })
    },
});

export default dashboardSlice.reducer;
