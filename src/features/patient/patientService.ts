import { Patient } from '../../app/models/patient.model';

export function postPatient(patient: Patient)
{
    patients = [
        ...patients,
        {
            ...patient,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export function getPatients()
{
    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export function putPatient(patient: Patient)
{
    patients = [
        ...patients.filter(doc => doc.id !== patient.id),
        {
            ...patient,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export function deletePatient(id: string)
{
    patients = patients.filter(doc => doc.id !== id);

    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export let patients: Array<Patient> = [
    {
        id: '12665456',
        name: 'Maria das Graças',
        phone: 12988874488,
        email: 'mariadasgracas@gmail.com'
    }
]