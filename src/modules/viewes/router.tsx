import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../../App';
import CreateAccount from './create-account/CreateAccount';
import Error404 from './error/404';
import Home from './home/home';
import LoginViewer from './login/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginViewer />,
      },
      {
        path: 'create-account',
        element: <CreateAccount />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
