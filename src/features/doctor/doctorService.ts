import { Doctor } from '../../app/models/doctor.model';

export function postDoctor(doctor: Doctor)
{
    doctors = [
        ...doctors,
        {
            ...doctor,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Doctor> }>((resolve) =>
        setTimeout(() => resolve({ data: doctors }), 1000)
    );
}

export function getDoctors()
{
    return new Promise<{ data: Array<Doctor> }>((resolve) =>
        setTimeout(() => resolve({ data: doctors }), 1000)
    );
}

export function putDoctor(doctor: Doctor)
{
    doctors = [
        ...doctors.filter(doc => doc.id !== doctor.id),
        {
            ...doctor,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Doctor> }>((resolve) =>
        setTimeout(() => resolve({ data: doctors }), 1000)
    );
}

export function deleteDoctor(id: string)
{
    doctors = doctors.filter(doc => doc.id !== id);

    return new Promise<{ data: Array<Doctor> }>((resolve) =>
        setTimeout(() => resolve({ data: doctors }), 1000)
    );
}

export let doctors: Array<Doctor> = [
    {
        id: '1235456',
        name: 'João da Silva',
        phone: 12985474488,
        email: 'joaodasilva@gmail.com',
        specialty: 'orthopedia'
    }
]