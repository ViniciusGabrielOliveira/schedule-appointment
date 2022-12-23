import { useEffect } from 'react';
import './App.css';
import { Dashboard } from './app/containers/dashboard/Dashboard';
import { useAppDispatch, useAppSelector } from './app/hooks';
import dashboardIcon from './assets/dashboard.png';
import profile from './assets/profile.svg';
import { selectAmount } from './features/dashboard/dashboardSelect';
import { getAmountAsync } from './features/dashboard/dashboardSlice';

function App()
{
    const amount = useAppSelector(selectAmount);
    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        dispatch(getAmountAsync());
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>CONSULTÓRIO MÉDICO</h2>
                <div className="container-right">
                    <div className="container-amount">
                        <span className='label'>Faturamento do Dia:</span>
                        <span className="amount">R$ {amount}</span>
                    </div>
                    <div className="circle">
                        <img src={profile} className="profile" alt="logo" />
                    </div>
                </div>
            </header>

            <div className='container-body'>
                <div className='menu'>
                    <div className="circle">
                        <img src={dashboardIcon} className="profile" alt="logo" />
                    </div>
                </div>

                <Dashboard />
            </div>

        </div>
    );
}

export default App;
