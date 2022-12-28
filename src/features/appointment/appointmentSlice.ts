import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Appointment } from '../../app/models/appointment.model';
import { deleteAppointment, getAppointments, postAppointment, putAppointment } from './appointmentService';

export interface AppointmentState
{
    appointments: Array<Appointment>;
    statusAppointments: 'idle' | 'loading' | 'failed';
}

const initialState: AppointmentState = {
    appointments: [],
    statusAppointments: 'idle'
};

export const postAppointmentAsync = createAsyncThunk(
    'appointment/post',
    async (appointment: Appointment) =>
    {
        const response = await postAppointment(appointment);
        return response.data;
    }
);

export const getAppointmentsAsync = createAsyncThunk(
    'appointments',
    async (day?: string) =>
    {
        const response = await getAppointments(day);
        return response.data;
    }
);

export const putAppointmentAsync = createAsyncThunk(
    'appointment/put',
    async (appointment: Appointment) =>
    {
        const response = await putAppointment(appointment);
        return response.data;
    }
);

export const deleteAppointmentAsync = createAsyncThunk(
    'appointment/delete',
    async (id: string) =>
    {
        const response = await deleteAppointment(id);
        return response.data;
    }
);

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
    {
        builder
            .addCase(postAppointmentAsync.pending, (state) =>
            {
                state.statusAppointments = 'loading';
            })
            .addCase(postAppointmentAsync.fulfilled, (state, action) =>
            {
                state.statusAppointments = 'idle';
                state.appointments = action.payload;
            })
            .addCase(postAppointmentAsync.rejected, (state) =>
            {
                state.statusAppointments = 'failed';
            })
            .addCase(getAppointmentsAsync.pending, (state) =>
            {
                state.statusAppointments = 'loading';
            })
            .addCase(getAppointmentsAsync.fulfilled, (state, action) =>
            {
                state.statusAppointments = 'idle';
                state.appointments = action.payload;
            })
            .addCase(getAppointmentsAsync.rejected, (state) =>
            {
                state.statusAppointments = 'failed';
            })
            .addCase(putAppointmentAsync.pending, (state) =>
            {
                state.statusAppointments = 'loading';
            })
            .addCase(putAppointmentAsync.fulfilled, (state, action) =>
            {
                state.statusAppointments = 'idle';
                state.appointments = action.payload;
            })
            .addCase(putAppointmentAsync.rejected, (state) =>
            {
                state.statusAppointments = 'failed';
            })
            .addCase(deleteAppointmentAsync.pending, (state) =>
            {
                state.statusAppointments = 'loading';
            })
            .addCase(deleteAppointmentAsync.fulfilled, (state, action) =>
            {
                state.statusAppointments = 'idle';
                state.appointments = action.payload;
            })
            .addCase(deleteAppointmentAsync.rejected, (state) =>
            {
                state.statusAppointments = 'failed';
            })
    },
});

export default appointmentSlice.reducer;
