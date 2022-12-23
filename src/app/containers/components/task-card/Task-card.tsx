import './Task-card.css';

export interface TaskCardModel {
    name: string;
    message: string;
}

export function TaskCard({name, message}: TaskCardModel)
{
    return (
        <div className='card-task'>
            <h1 className='name'>{ name }</h1>
            <p className='message'>{ message }</p>
        </div>
    );
}
