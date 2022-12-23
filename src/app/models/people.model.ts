import { Appointment } from './appointment.model';
import { Medicine } from './doctor.model';

export interface People
{
    id: string;
    name: string;
    phone: number;
    email: string;
    address?: string;
}

export interface Patient extends People
{
    allergicMedications?: Array<Medicine>;
    appointments?: Array<Appointment>;
}
