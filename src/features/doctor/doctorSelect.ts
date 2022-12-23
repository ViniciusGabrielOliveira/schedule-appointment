import { RootState } from '../../app/store';

export const selectDoctors = (state: RootState) => state.doctor.doctors;
export const selectStatusDoctors = (state: RootState) => state.doctor.statusDoctors;