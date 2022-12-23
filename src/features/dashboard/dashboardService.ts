import { DateTime } from 'luxon';
import { DayCardModel } from '../../app/containers/components/day-card/Day-card';
import { filterAppointmentsByDay } from '../appointment/appointmentService';

export function getAmount()
{
    const appointmentsOfDay = filterAppointmentsByDay(new Date().toISOString())

    const amountDay = appointmentsOfDay.reduce((previous, current) => {
        return current.value + previous
    }, 0);

    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amountDay }), 1000)
    );
}

export async function getDayCards(date?: string)
{
    let initialDay = DateTime.fromISO(date ? date : new Date().toISOString());
    const response: Array<DayCardModel> = []
    return new Promise<{ data: Array<DayCardModel> }>((resolve) =>
        setTimeout(() => {
            for (let index = 0; index < 7; index++)
            {

                const appointmentsOfDay = filterAppointmentsByDay(initialDay.toISO());

                const amountDay = appointmentsOfDay.reduce((previous, current) => {
                    return current.value + previous
                }, 0);

                const percent = (appointmentsOfDay.length / 14) * 100;

                response.push({
                    date: initialDay.toISO(),
                    amountDay: amountDay,
                    percent: percent
                });

                initialDay = initialDay.plus({days: 1});
            }
            return resolve({ data: response })
        }, 1000)
    );
}