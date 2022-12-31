import { RootState } from '../../app/store';

export const selectMedicines = (state: RootState) => state.medicine.medicines;
export const selectStatusMedicines = (state: RootState) => state.medicine.statusMedicines;