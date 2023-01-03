import { Button, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectStatusTask, selectStatusTasks, selectTask } from '../../../features/task/taskSelect';
import { getTaskByIdAsync, postTaskAsync, putTaskAsync } from '../../../features/task/taskSlice';
import { router } from '../../../routerBrowser';
import { validateMessages } from '../../../util/validate-messages';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Task } from '../../models/task.model';
import './Create-task.css';

export function CreateTask()
{
    const {id} = useParams();
    const [form] = useForm();

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatusTasks);
    const statusTask = useAppSelector(selectStatusTask);
    const task = useAppSelector(selectTask);

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    useEffect(() =>
    {
        if(id)
        {
            dispatch(getTaskByIdAsync(id));
            form.setFieldsValue({
                id: task?.id,
                name: task?.name,
                message: task?.message
            });
        }
    }, [ dispatch, id, task, form ]);

    const onFinish = (values: Task) =>
    {
        id ? dispatch(putTaskAsync({id, ...values})) : dispatch(postTaskAsync(values));
    };

    return (
        <div className='task-body'>
            <Form form={form} className='task-form' {...layout} style={{ width: '100%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item>
                    <h1 className='title'>Adicionar Tarefa</h1>
                </Form.Item>
                <Form.Item name={[ 'name' ]} label="Nome" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item name={[ 'message' ]} label="Descrição" rules={[ { required: true } ]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Spin spinning={statusTask === 'loading'}>
                        <Button className='mr' type="default" onClick={() => router.navigate(-1)}>
                            Voltar
                        </Button>
                        <Button loading={status === 'loading'} type="primary" htmlType="submit">
                            Cadastrar
                        </Button>
                    </Spin>
                </Form.Item>
            </Form>
        </div>
    );
}
