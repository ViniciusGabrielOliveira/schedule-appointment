import { Button, Form, Input } from 'antd';
import { selectStatusPatients } from '../../../features/patient/patientSelect';
import { postPatientAsync } from '../../../features/patient/patientSlice';
import { router } from '../../../routerBrowser';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Patient } from '../../models/patient.model';
import './Create-patient.css';

export function CreatePatient()
{
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusPatients);

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

    const onFinish = (values: Patient) =>
    {
        dispatch(postPatientAsync(values));
    };

    return (
        <div className='patient-body'>
            <Form className='patient-form' {...layout} style={{ width: '100%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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
