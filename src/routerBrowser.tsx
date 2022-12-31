import { createBrowserRouter } from 'react-router-dom';
import { CreateAppointment } from './app/containers/create-appointment/Create-appointment';
import { CreateDoctor } from './app/containers/create-doctor/Create-doctor';
import { CreateTask } from './app/containers/create-task/Create-task';
import { Dashboard } from './app/containers/dashboard/Dashboard';
import { DetailDay } from './app/containers/detail-day/Detail-day';
import { Hoot } from './app/containers/hoot/Hoot';

export const router = createBrowserRouter([
    {
        path: "/",
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
                path: "/create-doctor",
                element: <CreateDoctor />
            },
            {
                path: "/create-task",
                element: <CreateTask />
            },
            {
                path: "/create-appointment",
                element: <CreateAppointment />
            }
          ]
    },

]);