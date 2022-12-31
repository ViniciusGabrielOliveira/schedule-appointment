import { AppointmentStatus } from './appointment-status.enum';
import { Doctor } from './doctor.model';
import { Medicine } from './medicine.model';
import { Patient } from './patient.model';

export interface Appointment
{
    id?: string
    date: string;
    status: AppointmentStatus;
    doctor: Doctor;
    patient: Patient;
    value: number;
    createAt: string;
    arrivalTime?: string;
    startTime?: string;
    endTime?: string;
    symptoms?: string;
    exams?: string;
    diagnosis?: string;
    medicines?: Array<Medicine>;
    providence?: string;
}