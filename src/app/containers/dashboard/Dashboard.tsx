import { Button, Calendar, Modal, Spin } from 'antd';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trash from '../../../assets/trash.png';
import { getAppointmentsAsync } from '../../../features/appointment/appointmentSlice';
import { selectDayCards, selectStatusDayCards } from '../../../features/dashboard/dashboardSelect';
import { getAmountAsync, getDayCardsAsync, setDaySelected } from '../../../features/dashboard/dashboardSlice';
import { getDoctorsAsync } from '../../../features/doctor/doctorSlice';
import { selectStatusTasks, selectTasks } from '../../../features/task/taskSelect';
import { deleteTaskAsync, getTasksAsync } from '../../../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DayCard, DayCardModel } from '../components/day-card/Day-card';
import { TaskCard } from '../components/task-card/Task-card';
import './Dashboard.css';

export function Dashboard()
{
    const [ dayPicked, setDayPicked ] = useState<string>();
    const [ taskDelete, setTaskDelete ] = useState<string>();
    const tasks = useAppSelector(selectTasks);
    const dayCards = useAppSelector(selectDayCards);
    const loadingDayCards = useAppSelector(selectStatusDayCards) === 'loading';
    const loadingTasks = useAppSelector(selectStatusTasks) === 'loading';

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Tem certeza que deseja deletar esta task?');


    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        dispatch(getDayCardsAsync(dayPicked));
        dispatch(getDoctorsAsync());
        dispatch(getTasksAsync());
        dispatch(getAppointmentsAsync());
        dispatch(getAmountAsync());
    }, [ dayPicked, dispatch ]);

    const onChange = (value: Dayjs) =>
    {
        setDayPicked(value.format('YYYY-MM-DD'));

    };

    const deleteTasks = (id: string) =>
    {
        setTaskDelete(id)
        setOpen(true);
    }

    const handleOkTask = () => {
        setModalText('...deletando')
        setConfirmLoading(true);
        setTimeout(() => {
            dispatch(deleteTaskAsync(taskDelete!));
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const onClickDayCard = (item: DayCardModel) =>
    {
        dispatch(getAppointmentsAsync(item.date))
        dispatch(setDaySelected(item.date));
    }

    const tasksList = tasks.map((item, index) =>
    {
        return <div key={index} className='container-task-card'>
            <TaskCard {...{
                id: item.id!,
                name: item.name,
                message: item.message
            }}></TaskCard>
            <img width={25} height={30} src={trash} alt="logo" onClick={() => deleteTasks(item.id!)} />
        </div>
    })

    const dayCardsList = dayCards.map((item, index) =>
    {
        return <div key={index} onClick={() => onClickDayCard(item)}>
            <DayCard {...item} ></DayCard>
        </div>
    })

    return (
        <div className='body'>
            <div className='column-left'>
                <Calendar className='calendar' fullscreen={false} onChange={onChange} />
                <div className='container-title'>
                    <h1 className='title'>Tarefas</h1>
                    <Link to="schedule-appointment/create-task">
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
            <Modal
                title="Delete"
                open={open}
                onOk={handleOkTask}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </div>
    );
}
