import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Medicine } from '../../app/models/medicine.model';
import { router } from '../../routerBrowser';
import { deleteMedicine, getMedicines, postMedicine, putMedicine } from './medicineService';

export interface MedicineState
{
    medicines: Array<Medicine>;
    statusMedicines: 'idle' | 'loading' | 'failed';
}

const initialState: MedicineState = {
    medicines: [],
    statusMedicines: 'idle'
};

export const postMedicineAsync = createAsyncThunk(
    'medicine/post',
    async (medicine: Medicine) =>
    {
        const response = await postMedicine(medicine);
        router.navigate('schedule-appointment');
        return response.data;
    }
);

export const getMedicinesAsync = createAsyncThunk(
    'medicine',
    async () =>
    {
        const response = await getMedicines();
        return response.data;
    }
);

export const putMedicineAsync = createAsyncThunk(
    'medicine/put',
    async (medicine: Medicine) =>
    {
        const response = await putMedicine(medicine);
        return response.data;
    }
);

export const deleteMedicineAsync = createAsyncThunk(
    'medicine/delete',
    async (id: string) =>
    {
        const response = await deleteMedicine(id);
        return response.data;
    }
);

export const medicineSlice = createSlice({
    name: 'medicine',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
    {
        builder
            .addCase(postMedicineAsync.pending, (state) =>
            {
                state.statusMedicines = 'loading';
            })
            .addCase(postMedicineAsync.fulfilled, (state, action) =>
            {
                state.statusMedicines = 'idle';
                state.medicines = action.payload;
            })
            .addCase(postMedicineAsync.rejected, (state) =>
            {
                state.statusMedicines = 'failed';
            })


            .addCase(getMedicinesAsync.pending, (state) =>
            {
                state.statusMedicines = 'loading';
            })
            .addCase(getMedicinesAsync.fulfilled, (state, action) =>
            {
                state.statusMedicines = 'idle';
                state.medicines = action.payload;
            })
            .addCase(getMedicinesAsync.rejected, (state) =>
            {
                state.statusMedicines = 'failed';
            })


            .addCase(putMedicineAsync.pending, (state) =>
            {
                state.statusMedicines = 'loading';
            })
            .addCase(putMedicineAsync.fulfilled, (state, action) =>
            {
                state.statusMedicines = 'idle';
                state.medicines = action.payload;
            })
            .addCase(putMedicineAsync.rejected, (state) =>
            {
                state.statusMedicines = 'failed';
            })


            .addCase(deleteMedicineAsync.pending, (state) =>
            {
                state.statusMedicines = 'loading';
            })
            .addCase(deleteMedicineAsync.fulfilled, (state, action) =>
            {
                state.statusMedicines = 'idle';
                state.medicines = action.payload;
            })
            .addCase(deleteMedicineAsync.rejected, (state) =>
            {
                state.statusMedicines = 'failed';
            })
    },
});

export default medicineSlice.reducer;
