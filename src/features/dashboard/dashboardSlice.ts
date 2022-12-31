import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DayCardModel } from '../../app/containers/components/day-card/Day-card';
import { getAmount, getDayCards } from './dashboardService';

export interface DashboardState
{
    amount: number;
    statusAmount: 'idle' | 'loading' | 'failed';
    statusDayCards: 'idle' | 'loading' | 'failed';
    dayCards: Array<DayCardModel>;
    daySelected: string | undefined;
}

const initialState: DashboardState = {
    amount: 0,
    statusAmount: 'idle',
    statusDayCards: 'idle',
    dayCards: [],
    daySelected: undefined
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
    reducers: {
        setDaySelected: (state, action: PayloadAction<string>) => {
            state.daySelected = action.payload
        },
    },

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

export const { setDaySelected } = dashboardSlice.actions

export default dashboardSlice.reducer;
