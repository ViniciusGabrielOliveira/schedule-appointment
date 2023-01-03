import { Button, Calendar, Spin } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { DateTime } from 'luxon';
import { useEffect } from 'react';
import { selectAppointments, selectStatusAppointments } from '../../../features/appointment/appointmentSelect';
import { getAppointmentsAsync } from '../../../features/appointment/appointmentSlice';
import { selectDaySelected } from '../../../features/dashboard/dashboardSelect';
import { setDaySelected } from '../../../features/dashboard/dashboardSlice';
import { router } from '../../../routerBrowser';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppointmentStatus } from '../../models/appointment-status.enum';
import './Detail-day.css';

export function DetailDay()
{
    const loadingAppointments = useAppSelector(selectStatusAppointments) === 'loading';

    const appointments = useAppSelector(selectAppointments);
    const daySelected = useAppSelector(selectDaySelected);

    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        dispatch(getAppointmentsAsync(daySelected));

    }, [ dispatch, daySelected ]);

    const onChange = (value: Dayjs) =>
    {
        dispatch(setDaySelected(value.toISOString()));
    };

    const hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    const colorAppoint = (status: AppointmentStatus) => {
        return {
            [AppointmentStatus.finished]: '#8f8f8f',
            [AppointmentStatus.progress]: '#a3b18a',
            [AppointmentStatus.scheduled]: '#457b9d',
            [AppointmentStatus.waiting]: '#ffb703'
        }[status]
    }

    const appointmentsList = (hour: number) => appointments.map((appoint, index) =>
    {
        return DateTime.fromISO(appoint.date).hour === hour &&
            <div
                key={index}
                style={{backgroundColor: colorAppoint(appoint.status) }}
                className='detail-day-container-appoint'
                onClick={() => router.navigate(`schedule-appointment/edit-appointment/${appoint.id}`)}>
                <h6>{appoint.patient?.name}</h6>
                <h6>{DateTime.fromISO(appoint.date).toLocaleString(DateTime.TIME_SIMPLE) }</h6>
            </div>
    })

    const hoursList = hours.map((item, index) =>
    {
        return <div key={index} className='detail-day-container-day'>
            <h5 className='detail-day-hour'>{item + ':00'}</h5>
            {appointmentsList(item)}
        </div>
    })

    return (
        <Spin spinning={loadingAppointments}>
            <div className='detail-day-body'>
                <div className='detail-day-container-left'>
                    <Calendar className='calendar' value={dayjs(daySelected)} fullscreen={false} onChange={onChange} />
                    <Button type="primary" onClick={() => router.navigate('schedule-appointment/create-appointment')}>
                        agendar
                    </Button>
                    <Button type="default" onClick={() => router.navigate(-1)}>
                        Voltar
                    </Button>
                </div>

                <div className='detail-day-container-hours-list'>
                    {hoursList}
                </div>
            </div>
        </Spin>
    );
}
