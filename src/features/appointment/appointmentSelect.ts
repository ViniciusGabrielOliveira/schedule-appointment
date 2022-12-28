import { RootState } from '../../app/store';

export const selectAppointments = (state: RootState) => state.appointment.appointments;
export const selectStatusAppointments = (state: RootState) => state.appointment.statusAppointments;