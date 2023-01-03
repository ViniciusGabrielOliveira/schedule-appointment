import { router } from '../../../../routerBrowser';
import './Task-card.css';

export interface TaskCardModel {
    id: string;
    name: string;
    message: string;
}

export function TaskCard({id, name, message}: TaskCardModel)
{
    return (
        <div className='card-task' onClick={() => router.navigate(`/edit-task/${id}`)}>
            <h1 className='name'>{ name }</h1>
            <p className='message'>{ message }</p>
        </div>
    );
}
