import { createBrowserRouter } from 'react-router-dom';
import { CreateDoctor } from './app/containers/create-doctor/Create-doctor';
import { CreateTask } from './app/containers/create-task/Create-task';
import { Dashboard } from './app/containers/dashboard/Dashboard';
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
              path: "note/:noteId",
              element: <CreateDoctor />,
              errorElement: <h2>Não encontrado</h2>,
            },
            {
                path: "/create-doctor",
                element: <CreateDoctor />
            },
            {
                path: "/create-task",
                element: <CreateTask />
            },
          ]
    },

]);