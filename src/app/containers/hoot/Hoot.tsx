import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import dashboardIcon from '../../../assets/dashboard.png';
import profile from '../../../assets/profile.svg';
import { selectAmount } from '../../../features/dashboard/dashboardSelect';
import { getAmountAsync } from '../../../features/dashboard/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './Hoot.css';

export function Hoot()
{
    const amount = useAppSelector(selectAmount);
    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        dispatch(getAmountAsync());
    }, []);

    return (
        <div className="hoot-App">
            <header className="hoot-App-header">
                <h2>CONSULTÓRIO MÉDICO</h2>
                <div className="hoot-container-right">
                    <div className="hoot-container-amount">
                        <span className='hoot-label'>Faturamento do Dia:</span>
                        <span className="hoot-amount">R$ {amount}</span>
                    </div>
                    <div className="hoot-circle">
                        <img src={profile} className="hoot-profile" alt="logo" />
                    </div>
                </div>
            </header>

            <div className='hoot-container-body'>
                <div className='hoot-menu'>
                    <div className="hoot-circle">
                        <img src={dashboardIcon} className="hoot-profile" alt="logo" />
                    </div>
                </div>
                <Outlet />
            </div>

        </div>
    );
}
