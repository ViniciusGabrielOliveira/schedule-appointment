import { createBrowserRouter } from 'react-router-dom';
import { CreateAppointment } from './app/containers/create-appointment/Create-appointment';
import { CreateDoctor } from './app/containers/create-doctor/Create-doctor';
import { CreateMedicine } from './app/containers/create-medicine/Create-medicine';
import { CreatePatient } from './app/containers/create-patient/Create-patient';
import { CreateTask } from './app/containers/create-task/Create-task';
import { Dashboard } from './app/containers/dashboard/Dashboard';
import { DetailDay } from './app/containers/detail-day/Detail-day';
import { Hoot } from './app/containers/hoot/Hoot';

export const router = createBrowserRouter([
    {
        path: "schedule-appointment",
        element: <Hoot />,
        children: [
            {
              path: "",
              element: <Dashboard />
            },
            {
              path: "detail-day",
              element: <DetailDay />
            },
            {
                path: "create-doctor",
                element: <CreateDoctor />
            },
            {
                path: "create-patient",
                element: <CreatePatient />
            },
            {
                path: "create-task",
                element: <CreateTask />
            },
            {
                path: "edit-task/:id",
                element: <CreateTask />
            },
            {
                path: "create-appointment",
                element: <CreateAppointment />
            },
            {
                path: "edit-appointment/:id",
                element: <CreateAppointment />
            },
            {
                path: "create-medicine",
                element: <CreateMedicine />
            }
          ]
    },

]);