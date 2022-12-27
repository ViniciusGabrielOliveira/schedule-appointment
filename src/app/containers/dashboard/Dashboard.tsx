import { Button, Calendar, Spin } from 'antd';
import type { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trash from '../../../assets/trash.png';
import { getAppointmentsAsync } from '../../../features/appointment/appointmentSlice';
import { selectDayCards, selectStatusDayCards } from '../../../features/dashboard/dashboardSelect';
import { getDayCardsAsync } from '../../../features/dashboard/dashboardSlice';
import { selectDoctors, selectStatusDoctors } from '../../../features/doctor/doctorSelect';
import { deleteDoctorAsync, getDoctorsAsync } from '../../../features/doctor/doctorSlice';
import { selectStatusTasks, selectTasks } from '../../../features/task/taskSelect';
import { deleteTaskAsync, getTasksAsync } from '../../../features/task/taskSlice';
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
    const loadingDoctors = useAppSelector(selectStatusDoctors) === 'loading';
    const loadingTasks = useAppSelector(selectStatusTasks) === 'loading';


    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        dispatch(getDayCardsAsync(daySelected));
        dispatch(getDoctorsAsync());
        dispatch(getTasksAsync());
        dispatch(getAppointmentsAsync());
    }, [ daySelected, dispatch ]);

    const onChange = (value: Dayjs) =>
    {
        setDaySelected(value.format('YYYY-MM-DD'));
    };

    const deleteDoctor = (id: string) =>
    {
        dispatch(deleteDoctorAsync(id));
    }

    const deleteTasks = (id: string) =>
    {
        dispatch(deleteTaskAsync(id));
    }

    const doctorsList = doctors.map((item, index) =>
    {
        return <div key={index} className='container-task-card' onClick={() => deleteDoctor(item.id)}>
            <TaskCard {...{
                name: item.name,
                message: item.specialty
            }}></TaskCard>
            <img width={25} height={30} src={trash} alt="logo" />
        </div>
    })

    const tasksList = tasks.map((item, index) =>
    {
        return <div key={index} className='container-task-card' onClick={() => deleteTasks(item.id!)}>
            <TaskCard {...{
                name: item.name,
                message: item.message
            }}></TaskCard>
            <img width={25} height={30} src={trash} alt="logo" />
        </div>
    })

    const dayCardsList = dayCards.map((item, index) =>
    {
        return <DayCard key={index} {...item}></DayCard>
    })

    return (
        <div className='body'>
            <div className='column-left'>

                <Calendar className='calendar' fullscreen={false} onChange={onChange} />
                <div className='container-title'>
                    <h1 className='title'>Médicos</h1>
                    <Link to="create-doctor">
                        <Button type="primary" shape="circle">
                            +
                        </Button>
                    </Link>
                </div>
                <Spin spinning={loadingDoctors}>
                    {doctorsList}
                </Spin>

                <div className='container-title'>
                    <h1 className='title'>Tarefas</h1>
                    <Link to="create-task">
                        <Button type="primary" shape="circle">
                            +
                        </Button>
                    </Link>
                </div>
                <Spin spinning={loadingTasks}>
                    {tasksList}
                </Spin>
            </div>
            <div className='column-right'>
                <Spin spinning={loadingDayCards}>
                    {dayCardsList}
                </Spin>
            </div>
        </div>

    );
}
