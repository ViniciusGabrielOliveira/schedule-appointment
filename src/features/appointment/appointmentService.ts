import { DateTime } from 'luxon';
import { AppointmentStatus } from '../../app/models/appointment-status.enum';
import { Appointment } from '../../app/models/appointment.model';

export function postAppointment(appointment: Appointment)
{
    appointmentsMock = [
        ...appointmentsMock,
        {
            ...appointment,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Appointment> }>((resolve) =>
        setTimeout(() => resolve({ data: appointmentsMock }), 1000)
    );
}

export function getAppointments(date?: string)
{
    if(!date)
    {
        return new Promise<{ data: Array<Appointment> }>((resolve) =>
            setTimeout(() => resolve({ data: appointmentsMock }), 1000)
        );
    }

    let response = filterAppointmentsByDay(DateTime.fromISO(date).toISO());

    return new Promise<{ data: Array<Appointment> }>((resolve) =>
        setTimeout(() => resolve({ data: response }), 1000)
    );
}

export function getAppointmentById(id: string)
{
    const appointment = appointmentsMock.find(item => item.id === id);
    if(appointment)
    {
        return new Promise<{ data: Appointment }>((resolve) =>
            setTimeout(() => resolve({ data: appointment }), 1000)
        );
    }
}

export function putAppointment(appointment: Appointment)
{
    appointmentsMock = [
        ...appointmentsMock.filter(app => app.id !== appointment.id),
        {
            ...appointment
        }
    ];

    return new Promise<{ data: Array<Appointment> }>((resolve) =>
        setTimeout(() => resolve({ data: appointmentsMock }), 1000)
    );
}

export function deleteAppointment(id: string)
{
    appointmentsMock = appointmentsMock.filter(app => app.id !== id);
    return new Promise<{ data: Array<Appointment> }>((resolve) =>
        setTimeout(() => resolve({ data: appointmentsMock }), 1000)
    );
}

export function filterAppointmentsByDay(day: string): Array<Appointment>
{
    return appointmentsMock
        .filter(appMock => DateTime.fromISO(appMock.date).startOf("day").toISO()
        === DateTime.fromISO(day).startOf("day").toISO());
}

export let appointmentsMock: Array<Appointment> = [
    {
        id: '1234565489',
        date: new Date().toISOString(),
        status: AppointmentStatus.scheduled,
        patient: {
            id: '123456789a',
            name: 'Maria das Graças',
            phone: 12988874488,
            email: 'mariadasgracas@gmail.com'
        },
        value: 104.88,
        createAt: new Date().toISOString(),
        doctor: {
            id: '1235456',
            name: 'João da Silva',
            phone: 12985474488,
            email: 'joaodasilva@gmail.com',
            specialty: 'orthopedia'
        }
    },
    {
        id: '1565489',
        date: '2022-12-24T10:25:29.194Z',
        status: AppointmentStatus.scheduled,
        patient: {
            id: '1235456',
            name: 'Joaquim das Neves',
            phone: 12985444488,
            email: 'joaquimdasneves@gmail.com'
        },
        value: 504.88,
        createAt: new Date().toISOString(),
        doctor: {
            id: '1235456',
            name: 'João da Silva',
            phone: 12985474488,
            email: 'joaodasilva@gmail.com',
            specialty: 'orthopedia'
        }
    },
    {
        id: '1565689',
        date: '2022-12-24T10:25:29.194Z',
        status: AppointmentStatus.scheduled,
        patient: {
            id: '1235456',
            name: 'Joaquim',
            phone: 12985444488,
            email: 'joaquimdasneves@gmail.com'
        },
        value: 204.88,
        createAt: new Date().toISOString(),
        doctor: {
            id: '1235456',
            name: 'João da Silva',
            phone: 12985474488,
            email: 'joaodasilva@gmail.com',
            specialty: 'orthopedia'
        }
    }
]
