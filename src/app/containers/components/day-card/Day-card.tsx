import { DateTime } from "luxon";
import './Day-card.css';

export interface DayCardModel {
    date: string;
    amountDay: number;
    percent: number;
}

export function DayCard({date, amountDay, percent}: DayCardModel)
{
    const day = DateTime.fromISO(date)
        .toFormat('dd')

    const week = DateTime.fromISO(date, {locale: 'pt-br'})
        .toFormat('EEE')

    return (
        <div className='card'>
            <div className="circle-day">
                <h1 className='day'>{ day }</h1>
            </div>
            <h2>{ week }</h2>
            <div className='container-progress'>
                <h3>Faturamento do Dia: R${amountDay}</h3>
                <div className='container-pv'>
                    <div className='progress'>
                        <div className='progress-value' style={{ width: percent + '%' }}>
                            <p className='schedule'>agendamentos</p>
                        </div>
                    </div>
                    <h3>{percent.toFixed(0)}%</h3>
                </div>

            </div>
        </div>
    );
}
