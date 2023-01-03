import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Patient } from '../../app/models/patient.model';
import { router } from '../../routerBrowser';
import { deletePatient, getPatients, postPatient, putPatient } from './patientService';

export interface PatientState
{
    patients: Array<Patient>;
    statusPatients: 'idle' | 'loading' | 'failed';
}

const initialState: PatientState = {
    patients: [],
    statusPatients: 'idle'
};

export const postPatientAsync = createAsyncThunk(
    'patient/post',
    async (patient: Patient) =>
    {
        const response = await postPatient(patient);
        router.navigate('schedule-appointment');
        return response.data;
    }
);

export const getPatientsAsync = createAsyncThunk(
    'patient',
    async () =>
    {
        const response = await getPatients();
        return response.data;
    }
);

export const putPatientAsync = createAsyncThunk(
    'patient/put',
    async (patient: Patient) =>
    {
        const response = await putPatient(patient);
        return response.data;
    }
);

export const deletePatientAsync = createAsyncThunk(
    'patient/delete',
    async (id: string) =>
    {
        const response = await deletePatient(id);
        return response.data;
    }
);

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
    {
        builder
            .addCase(postPatientAsync.pending, (state) =>
            {
                state.statusPatients = 'loading';
            })
            .addCase(postPatientAsync.fulfilled, (state, action) =>
            {
                state.statusPatients = 'idle';
                state.patients = action.payload;
            })
            .addCase(postPatientAsync.rejected, (state) =>
            {
                state.statusPatients = 'failed';
            })


            .addCase(getPatientsAsync.pending, (state) =>
            {
                state.statusPatients = 'loading';
            })
            .addCase(getPatientsAsync.fulfilled, (state, action) =>
            {
                state.statusPatients = 'idle';
                state.patients = action.payload;
            })
            .addCase(getPatientsAsync.rejected, (state) =>
            {
                state.statusPatients = 'failed';
            })


            .addCase(putPatientAsync.pending, (state) =>
            {
                state.statusPatients = 'loading';
            })
            .addCase(putPatientAsync.fulfilled, (state, action) =>
            {
                state.statusPatients = 'idle';
                state.patients = action.payload;
            })
            .addCase(putPatientAsync.rejected, (state) =>
            {
                state.statusPatients = 'failed';
            })


            .addCase(deletePatientAsync.pending, (state) =>
            {
                state.statusPatients = 'loading';
            })
            .addCase(deletePatientAsync.fulfilled, (state, action) =>
            {
                state.statusPatients = 'idle';
                state.patients = action.payload;
            })
            .addCase(deletePatientAsync.rejected, (state) =>
            {
                state.statusPatients = 'failed';
            })
    },
});

export default patientSlice.reducer;
