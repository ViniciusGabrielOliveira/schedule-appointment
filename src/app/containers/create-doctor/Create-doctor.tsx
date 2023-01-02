import { Button, Form, Input } from 'antd';
import { selectStatusDoctors } from '../../../features/doctor/doctorSelect';
import { postDoctorAsync } from '../../../features/doctor/doctorSlice';
import { router } from '../../../routerBrowser';
import { validateMessages } from '../../../util/validate-messages';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Doctor } from '../../models/doctor.model';
import './Create-doctor.css';

export function CreateDoctor()
{
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusDoctors);

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    const onFinish = (values: Doctor) =>
    {
        dispatch(postDoctorAsync(values));
    };

    return (
        <div className='doctor-body'>
            <Form className='doctor-form' {...layout} style={{ width: '100%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={[ 'name' ]} label="Nome" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={[ 'phone' ]}
                    label="Telefone"
                    rules={[ { required: true, message: 'Telefone é um campo obrigatório!' } ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={[ 'email' ]} label="Email" rules={[ { type: 'email' } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={[ 'specialty' ]} label="Especialidadde" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={[ 'address' ]} label="Endereço" >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="default" onClick={() => router.navigate(-1)}>
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
