import { Button, Calendar, Spin } from 'antd';
import type { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { getAppointmentsAsync } from '../../../features/appointment/appointmentSlice';
import { selectDayCards, selectStatusDayCards } from '../../../features/dashboard/dashboardSelect';
import { getDayCardsAsync } from '../../../features/dashboard/dashboardSlice';
import { selectDoctors } from '../../../features/doctor/doctorSelect';
import { getDoctorsAsync } from '../../../features/doctor/doctorSlice';
import { selectTasks } from '../../../features/task/taskSelect';
import { getTasksAsync } from '../../../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DayCard } from '../components/day-card/Day-card';
import { TaskCard } from '../components/task-card/Task-card';
import './Dashboard.css';


export function Dashboard()
{
    const [ daySelected, setDaySelected ] = useState<string>()
    const doctors = useAppSelector(selectDoctors);
    const tasks = useAppSelector(selectTasks);
    const dayCards = useAppSelector(selectDayCards);
    const loadingDayCards = useAppSelector(selectStatusDayCards) === 'loading';


    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        dispatch(getDayCardsAsync(daySelected));
        dispatch(getDoctorsAsync());
        dispatch(getTasksAsync());
        dispatch(getAppointmentsAsync());
    }, [daySelected, dispatch]);

    const onChange = (value: Dayjs) =>
    {
        setDaySelected(value.format('YYYY-MM-DD'));
    };

    const doctorsList = doctors.map((item, index) =>
    {
        return <TaskCard key={index} {...{
            name: item.name,
            message: item.specialty
        }}></TaskCard>
    })

    const tasksList = tasks.map((item, index) =>
    {
        return <TaskCard key={index} {...{
            name: item.name,
            message: item.message
        }}></TaskCard>
    })

    const dayCardsList = dayCards.map((item, index) =>
    {
        return <DayCard key={index} {...item}></DayCard>
    })

    return (
        <Spin spinning={loadingDayCards}>
            <div className='body'>
                <div className='column-left'>

                    <Calendar className='calendar' fullscreen={false} onChange={onChange} />
                    <div className='container-title'>
                        <h1 className='title'>Médicos</h1>
                        <Button type="primary" shape="circle">
                            +
                        </Button>
                    </div>
                    { doctorsList }

                    <div className='container-title'>
                        <h1 className='title'>Tarefas</h1>
                        <Button type="primary" shape="circle">
                            +
                        </Button>
                    </div>
                    { tasksList }
                </div>
                <div className='column-right'>
                    { dayCardsList }
                </div>
            </div>
        </Spin>
    );
}
