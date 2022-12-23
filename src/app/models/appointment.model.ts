import { AppointmentStatus } from './appointment-status.enum';
import { Doctor, Medicine } from './doctor.model';
import { Patient } from './people.model';

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