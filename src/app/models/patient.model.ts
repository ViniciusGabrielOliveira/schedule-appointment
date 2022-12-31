import { Appointment } from './appointment.model';
import { Medicine } from './medicine.model';
import { People } from './people.model';

export interface Patient extends People
{
    allergicMedications?: Array<Medicine>;
    appointments?: Array<Appointment>;
}