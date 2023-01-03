import { Button, DatePicker, Form, Input, InputNumber, Select, Spin } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectAppointment, selectStatusAppointment, selectStatusAppointments } from '../../../features/appointment/appointmentSelect';
import { getAppointmentByIdAsync, postAppointmentAsync, putAppointmentAsync } from '../../../features/appointment/appointmentSlice';
import { selectDoctors } from '../../../features/doctor/doctorSelect';
import { getDoctorsAsync } from '../../../features/doctor/doctorSlice';
import { selectMedicines } from '../../../features/medicine/medicineSelect';
import { getMedicinesAsync } from '../../../features/medicine/medicineSlice';
import { selectPatients } from '../../../features/patient/patientSelect';
import { getPatientsAsync } from '../../../features/patient/patientSlice';
import { router } from '../../../routerBrowser';
import { range } from '../../../util/range';
import { validateMessages } from '../../../util/validate-messages';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppointmentStatus } from '../../models/appointment-status.enum';
import './Create-appointment.css';

export function CreateAppointment()
{
    const {id} = useParams();

    const [selectedMedicines, setSelectedMedicines] = useState<string[]>([]);
    const [arrivalTime, setArrivalTime] = useState<string>();
    const [startTime, setStartTime] = useState<string>();
    const [endTime, setEndTime] = useState<string>();
    const [appointmentStatus, setAppointmentStatus] = useState<AppointmentStatus>(AppointmentStatus.scheduled);
    const [time, setTime] = useState<dayjs.Dayjs>(dayjs().minute(0).second(0).millisecond(0));

    const [form] = useForm();

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusAppointments);
    const doctors = useAppSelector(selectDoctors);
    const medicines = useAppSelector(selectMedicines);
    const patients = useAppSelector(selectPatients);
    const appointment = useAppSelector(selectAppointment);
    const statusAppointment = useAppSelector(selectStatusAppointment);




    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    useEffect(() =>
    {
        dispatch(getDoctorsAsync());
        dispatch(getMedicinesAsync());
        dispatch(getPatientsAsync());
        if(id)
        {
            dispatch(getAppointmentByIdAsync(id));
            form.setFieldsValue({
                date: dayjs(appointment?.date),
                doctor: appointment?.doctor.id,
                patient: appointment?.patient.id,
                value: appointment?.value,
                symptoms: appointment?.symptoms,
                exams: appointment?.exams,
                medicines: appointment?.medicines?.map(item => item.id),
                providence: appointment?.providence,
            });
            setAppointmentStatus(appointment?.status!)
        }
    }, [ doctors, patients, medicines, dispatch, id, appointment, form ]);

    const onFinish = (values: any) =>
    {
        const response = {
            ...values,
            id,
            date: new Date(values.date).toISOString(),
            startTime,
            arrivalTime,
            endTime,
            patient: patients.find(item => values.patient === item.id)!,
            doctor: doctors.find(item => values.doctor === item.id)!,
            status: appointmentStatus
        }

        dispatch(id ? putAppointmentAsync({ ...response })
            : postAppointmentAsync({ ...response }));
    };

    const onArrival = () => {
        setArrivalTime(new Date().toISOString());
        setAppointmentStatus(AppointmentStatus.waiting)
    }

    const onFinishAppoint = () => {
        setEndTime(new Date().toISOString())
        setAppointmentStatus(AppointmentStatus.finished);
    }

    const onStart = () => {
        setStartTime(new Date().toISOString())
        setAppointmentStatus(AppointmentStatus.progress);
    }

    // eslint-disable-next-line arrow-body-style
    const disabledDate: RangePickerProps[ 'disabledDate' ] = (current) =>
    {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day').add(-1, 'day');
    };

    const disabledDateTime = () => ({
        disabledHours: () => [...range(0,6),...range(21,24)],
        disabledMinutes: () => [],
        disabledSeconds: () => [],
    });

    const optionsDoctors = doctors.map(item => ({value: item.id, label: item.name}))
    const optionsPatients = patients.map(item => ({value: item.id, label: item.name}))

    const filteredMedicines = medicines.filter((item) => !selectedMedicines.includes(item.name));

    useEffect(() =>
    {
        if(appointmentStatus === AppointmentStatus.progress)
        {
            setTimeout(() => {
                setTime(time.add(1, 'second'));
            }, 1000);
        }
    }, [appointmentStatus, time])

    return (
        <div className='appointment-body'>
            <Spin spinning={statusAppointment === 'loading'}>
                <Form
                    className='appointment-form'
                    {...layout}
                    style={{ width: '100%' }}
                    name="appointment"
                    onFinish={onFinish}
                    form={form}
                    validateMessages={validateMessages}>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                        {
                            appointmentStatus === AppointmentStatus.scheduled
                            && <Button className='mr' type="primary" onClick={onArrival}>
                                Paciente Aguardando
                            </Button>
                        }
                        {
                            appointmentStatus === AppointmentStatus.waiting
                            && <Button type="primary" onClick={onStart}>
                                Iniciar Consulta
                            </Button>
                        }
                    </Form.Item>
                    {appointmentStatus === AppointmentStatus.progress && <h1 className='time'>{time.format('mm:ss')}</h1>}
                    <Form.Item name={[ 'date' ]} label="Data" rules={[ { required: true } ]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                            disabledDate={disabledDate}
                            disabledTime={disabledDateTime}
                            showTime={{ defaultValue: dayjs('00:00', 'HH:mm') }}
                        />
                    </Form.Item>

                    <Form.Item name={[ 'doctor' ]} label="Doutor" rules={[ { required: true } ]}>
                        <Select options={optionsDoctors}></Select>
                    </Form.Item>

                    <Form.Item name={[ 'patient' ]} label="Paciente" rules={[ { required: true } ]}>
                        <Select
                            options={optionsPatients}
                            showSearch
                            placeholder="Procure pelo paciente"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input.toLowerCase())}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }>
                        </Select>
                    </Form.Item>

                    <Form.Item name={[ 'value' ]} label="Valor R$" rules={[ { required: true } ]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={[ 'symptoms' ]} label="Sintomas" initialValue={appointment?.symptoms}>
                        <Input.TextArea showCount maxLength={300}/>
                    </Form.Item>

                    <Form.Item name={[ 'exams' ]} label="Exames Solicidados" >
                        <Input.TextArea showCount maxLength={300} />
                    </Form.Item>

                    <Form.Item name={[ 'diagnosis' ]} label="Diagnostico" >
                        <Input.TextArea showCount maxLength={300} />
                    </Form.Item>

                    <Form.Item name={[ 'medicines' ]} label="Medicamentos" >
                        <Select
                            mode="multiple"
                            placeholder="Procure o remédio"
                            value={selectedMedicines}
                            onChange={setSelectedMedicines}
                            style={{ width: '100%' }}
                            options={filteredMedicines.map((item) => ({
                                value: item.id,
                                label: item.name,
                            }))}
                            showSearch
                            filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input.toLowerCase())}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                        />
                    </Form.Item>

                    <Form.Item name={[ 'providence' ]} label="Providências" >
                        <Input.TextArea showCount maxLength={300} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                        {appointmentStatus === AppointmentStatus.progress
                            && <Button className='mr' type="default" onClick={onFinishAppoint}>
                            Finalizar Consulta
                        </Button>}
                        {appointmentStatus !== AppointmentStatus.progress
                            && <Button className='mr' type="default" onClick={() => router.navigate(-1)}>
                            Voltar
                        </Button>}
                        {appointmentStatus !== AppointmentStatus.progress
                            && <Button loading={status === 'loading'} type="primary" htmlType="submit">
                            Cadastrar
                        </Button>}
                    </Form.Item>
                </Form>
            </Spin>
        </div>
    );
}
