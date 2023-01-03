import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Doctor } from '../../app/models/doctor.model';
import { router } from '../../routerBrowser';
import { deleteDoctor, getDoctors, postDoctor, putDoctor } from './doctorService';

export interface DoctorState
{
    doctors: Array<Doctor>;
    statusDoctors: 'idle' | 'loading' | 'failed';
}

const initialState: DoctorState = {
    doctors: [],
    statusDoctors: 'idle'
};

export const postDoctorAsync = createAsyncThunk(
    'doctor/post',
    async (doctor: Doctor) =>
    {
        const response = await postDoctor(doctor);
        router.navigate('schedule-appointment');
        return response.data;
    }
);

export const getDoctorsAsync = createAsyncThunk(
    'doctor',
    async () =>
    {
        const response = await getDoctors();
        return response.data;
    }
);

export const putDoctorAsync = createAsyncThunk(
    'doctor/put',
    async (doctor: Doctor) =>
    {
        const response = await putDoctor(doctor);
        return response.data;
    }
);

export const deleteDoctorAsync = createAsyncThunk(
    'doctor/delete',
    async (id: string) =>
    {
        const response = await deleteDoctor(id);
        return response.data;
    }
);

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
    {
        builder
            .addCase(postDoctorAsync.pending, (state) =>
            {
                state.statusDoctors = 'loading';
            })
            .addCase(postDoctorAsync.fulfilled, (state, action) =>
            {
                state.statusDoctors = 'idle';
                state.doctors = action.payload;
            })
            .addCase(postDoctorAsync.rejected, (state) =>
            {
                state.statusDoctors = 'failed';
            })


            .addCase(getDoctorsAsync.pending, (state) =>
            {
                state.statusDoctors = 'loading';
            })
            .addCase(getDoctorsAsync.fulfilled, (state, action) =>
            {
                state.statusDoctors = 'idle';
                state.doctors = action.payload;
            })
            .addCase(getDoctorsAsync.rejected, (state) =>
            {
                state.statusDoctors = 'failed';
            })


            .addCase(putDoctorAsync.pending, (state) =>
            {
                state.statusDoctors = 'loading';
            })
            .addCase(putDoctorAsync.fulfilled, (state, action) =>
            {
                state.statusDoctors = 'idle';
                state.doctors = action.payload;
            })
            .addCase(putDoctorAsync.rejected, (state) =>
            {
                state.statusDoctors = 'failed';
            })


            .addCase(deleteDoctorAsync.pending, (state) =>
            {
                state.statusDoctors = 'loading';
            })
            .addCase(deleteDoctorAsync.fulfilled, (state, action) =>
            {
                state.statusDoctors = 'idle';
                state.doctors = action.payload;
            })
            .addCase(deleteDoctorAsync.rejected, (state) =>
            {
                state.statusDoctors = 'failed';
            })
    },
});

export default doctorSlice.reducer;
