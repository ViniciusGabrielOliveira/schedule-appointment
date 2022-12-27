import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { selectStatusTasks } from '../../../features/task/taskSelect';
import { postTaskAsync } from '../../../features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Task } from '../../models/task.model';
import './Create-task.css';

export function CreateTask()
{
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusTasks);

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} é obrigatório!',
    };
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values: Task) =>
    {
        dispatch(postTaskAsync(values));
    };

    return (
        <div className='task-body'>
            <Form className='task-form' {...layout} style={{ width: '100%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={[ 'name' ]} label="Nome" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={[ 'message' ]} label="Descrição" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="default">
                        <Link to={`/`}>Voltar</Link>
                    </Button>
                    <Button loading={status === 'loading'} type="primary" htmlType="submit">
                        Cadastrar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
