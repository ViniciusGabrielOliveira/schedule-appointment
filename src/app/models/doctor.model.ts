import { Appointment } from './appointment.model';
import { People } from './people.model';

export interface Doctor extends People
{
    specialty: string;
    appointments?: Array<Appointment>;
}

export interface Medicine
{
    id: string;
    name: string;
    manufacturer: string;
}