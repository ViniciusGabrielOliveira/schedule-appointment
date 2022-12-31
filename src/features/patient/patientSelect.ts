import { RootState } from '../../app/store';

export const selectPatients = (state: RootState) => state.patient.patients;
export const selectStatusPatients = (state: RootState) => state.patient.statusPatients;