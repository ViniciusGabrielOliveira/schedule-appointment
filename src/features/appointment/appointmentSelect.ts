import { RootState } from '../../app/store';

export const selectAppointments = (state: RootState) => state.appointment.appointments;
export const selectStatusAppointments = (state: RootState) => state.appointment.statusAppointments;
export const selectStatusAppointment = (state: RootState) => state.appointment.statusAppointment;
export const selectAppointment = (state: RootState) => state.appointment.appointment;