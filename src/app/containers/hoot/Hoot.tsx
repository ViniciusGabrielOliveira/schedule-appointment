import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import add_calendar from '../../../assets/add-calendar.png';
import add_doctor from '../../../assets/add-doctor.png';
import add_medicine from '../../../assets/add-medicine.png';
import add_profile from '../../../assets/add-profile.png';
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
    }, [dispatch]);

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
                        <Link to="/">
                            <img src={dashboardIcon} className="hoot-profile" alt="logo" />
                        </Link>
                    </div>
                    <div className="hoot-circle">
                        <Link to="/create-appointment">
                            <img src={add_calendar} className="hoot-profile" alt="logo" />
                        </Link>
                    </div>
                    <div className="hoot-circle">
                        <Link to="/create-patient">
                            <img src={add_profile} className="hoot-profile" alt="logo" />
                        </Link>
                    </div>
                    <div className="hoot-circle">
                        <Link to="/create-doctor">
                            <img src={add_doctor} className="hoot-profile" alt="logo" />
                        </Link>
                    </div>
                    <div className="hoot-circle">
                        <Link to="/create-medicine">
                            <img src={add_medicine} className="hoot-profile" alt="logo" />
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>

        </div>
    );
}
