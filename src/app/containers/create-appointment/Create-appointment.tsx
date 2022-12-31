import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { selectStatusAppointments } from '../../../features/appointment/appointmentSelect';
import { postAppointmentAsync } from '../../../features/appointment/appointmentSlice';
import { selectDoctors } from '../../../features/doctor/doctorSelect';
import { getDoctorsAsync } from '../../../features/doctor/doctorSlice';
import { selectMedicines } from '../../../features/medicine/medicineSelect';
import { getMedicinesAsync } from '../../../features/medicine/medicineSlice';
import { selectPatients } from '../../../features/patient/patientSelect';
import { getPatientsAsync } from '../../../features/patient/patientSlice';
import { router } from '../../../routerBrowser';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './Create-appointment.css';

export function CreateAppointment()
{
    const [selectedMedicines, setSelectedMedicines] = useState<string[]>([]);
    const [arrivalTime, setArrivalTime] = useState<string>();
    const [startTime, setStartTime] = useState<string>();
    const [endTime, setEndTime] = useState<string>();

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusAppointments);
    const doctors = useAppSelector(selectDoctors);
    const medicines = useAppSelector(selectMedicines);
    const patients = useAppSelector(selectPatients);

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} é obrigatório!',
        types: {
            email: '${label} não é um email válido!',
            number: '${label} não é um número válido!',
        },
        number: {
            range: '${label} deve estar entre ${min} e ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    useEffect(() =>
    {
        dispatch(getDoctorsAsync());
        dispatch(getMedicinesAsync());
        dispatch(getPatientsAsync());
    }, [ doctors, patients, medicines, dispatch ]);

    const onFinish = (values: any) =>
    {
        dispatch(postAppointmentAsync({
            ...values,
            date: new Date(values.date).toISOString(),
            startTime,
            arrivalTime,
            endTime,
            patient: patients.find(item => values.patient === item.id)!,
            doctor: doctors.find(item => values.doctor === item.id)!
        }));
    };

    const range = (start: number, end: number) =>
    {
        const result = [];
        for (let i = start; i < end; i++)
        {
            result.push(i);
        }
        return result;
    };

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

    const filteredMedicines = medicines.filter((item) => !selectedMedicines.includes(item.name));

    return (
        <div className='appointment-body'>
            <Form className='appointment-form' {...layout} style={{ width: '100%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                    <Button className='mrb' type="primary" onClick={() => setArrivalTime(new Date().toISOString())}>
                        Paciente Aguardando
                    </Button>
                    <Button type="primary" onClick={() => setStartTime(new Date().toISOString())}>
                        Iniciar Consulta
                    </Button>
                </Form.Item>

                <Form.Item name={[ 'date' ]} label="Data" rules={[ { required: true } ]}>
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        disabledDate={disabledDate}
                        disabledTime={disabledDateTime}
                        showTime={{ defaultValue: dayjs('00:00', 'HH:mm') }}
                    />
                </Form.Item>

                <Form.Item name={[ 'doctor' ]} label="Doutor" rules={[ { required: true } ]}>
                    <Select>
                        {doctors.map((doc, index) => <Select.Option key={index} value={doc.id}>{doc.name}</Select.Option>)}
                    </Select>
                </Form.Item>

                <Form.Item name={[ 'patient' ]} label="Paciente" rules={[ { required: true } ]}>
                    <Select>
                        {patients.map((pat, index) => <Select.Option key={index} value={pat.id}>{pat.name}</Select.Option>)}
                    </Select>
                </Form.Item>

                <Form.Item name={[ 'value' ]} label="Valor R$" rules={[ { required: true } ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={[ 'symptoms' ]} label="Sintomas" >
                    <Input.TextArea showCount maxLength={300} />
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
                        placeholder="Inserted are removed"
                        value={selectedMedicines}
                        onChange={setSelectedMedicines}
                        style={{ width: '100%' }}
                        options={filteredMedicines.map((item) => ({
                            value: item.name,
                            label: item.name,
                        }))}
                    />
                </Form.Item>

                <Form.Item name={[ 'providence' ]} label="Providências" >
                    <Input.TextArea showCount maxLength={300} />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                    <Button className='mrb' type="default" onClick={() => setEndTime(new Date().toISOString)}>
                        Finalizar Consulta
                    </Button>
                    <Button className='mrb' type="default" onClick={() => router.navigate(-1)}>
                        Voltar
                    </Button>
                    <Button loading={status === 'loading'} type="primary" htmlType="submit">
                        Cadastrar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
