import { Task } from '../../app/models/task.model';

export function postTask(task: Task)
{
    tasks = [
        ...tasks,
        {
            ...task,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Task> }>((resolve) =>
        setTimeout(() => resolve({ data: tasks }), 1000)
    );
}

// A mock function to mimic making an async request for data
export function getTasks()
{
    return new Promise<{ data: Array<Task> }>((resolve) =>
        setTimeout(() => resolve({ data: tasks }), 1000)
    );
}

export function putTask(task: Task)
{
    tasks = [
        ...tasks.filter(tas => tas.id !== task.id),
        {
            ...task,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Task> }>((resolve) =>
        setTimeout(() => resolve({ data: tasks }), 1000)
    );
}

export function deleteTask(id: string)
{
    tasks = tasks.filter(tas => tas.id !== id);

    return new Promise<{ data: Array<Task> }>((resolve) =>
        setTimeout(() => resolve({ data: tasks }), 1000)
    );
}

export let tasks: Array<Task> = [
    {
        id: '65481235',
        name: 'Atenção',
        message: 'Lorem ypsum asdfj'
    }
]