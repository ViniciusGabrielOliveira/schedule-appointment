import { Button, Form, Input } from 'antd';
import { selectStatusMedicines } from '../../../features/medicine/medicineSelect';
import { postMedicineAsync } from '../../../features/medicine/medicineSlice';
import { router } from '../../../routerBrowser';
import { validateMessages } from '../../../util/validate-messages';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Medicine } from '../../models/medicine.model';
import './Create-medicine.css';

export function CreateMedicine()
{
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusMedicines);

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    const onFinish = (values: Medicine) =>
    {
        dispatch(postMedicineAsync(values));
    };

    return (
        <div className='medicine-body'>
            <Form className='medicine-form' {...layout} style={{ width: '100%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={[ 'name' ]} label="Nome" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={[ 'manufacturer' ]} label="Fabricante" >
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
