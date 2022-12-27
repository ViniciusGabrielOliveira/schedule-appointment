import { RouterProvider } from 'react-router-dom';
import { router } from './routerBrowser';

function App()
{
    return (
        <RouterProvider router={router} />
    );
}

export default App;
